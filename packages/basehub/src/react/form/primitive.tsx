"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useCallback, type ReactNode } from "react";
import { sendEvent, updateEvent } from "../../events";

// this needs to match our BSHBEventSchema scalar type so that it _just works_
export type Field = {
  id: string;
  name: string;
  label: string;
  required: boolean;
  placeholder?: string;
  defaultValue?: string;
  helpText?: string;
} & (
  | { type: "text" }
  | { type: "textarea" }
  | { type: "number" }
  | { type: "file" }
  | { type: "date" }
  | { type: "datetime" }
  | { type: "email" }
  | { type: "checkbox" }
  | { type: "hidden" }
  | { type: "select"; options: string[]; multiple: boolean }
  | { type: "radio"; options: string[]; multiple: boolean }
);

// PARSE FORM DATA HELPER ------------------------------------------------------------------------

export class FormValidationError extends Error {
  constructor(public fields: Record<string, string>) {
    super("Form validation failed");
    this.name = "FormValidationError";
  }
}

type FieldTypeToValueType<T extends Field> = T extends {
  type: "text" | "email" | "hidden" | "textarea";
}
  ? string
  : T extends { type: "number" }
  ? number
  : T extends { type: "checkbox" }
  ? boolean
  : T extends { type: "date" | "datetime" }
  ? string
  : T extends { type: "file" }
  ? File
  : T extends { type: "select" | "radio" }
  ? T["multiple"] extends true
    ? string[]
    : string
  : never;

type SchemaToType<T extends Field[]> = {
  [K in T[number] as K["name"]]: FieldTypeToValueType<K>;
};

export function parseFormData<Schema extends Field[]>({
  schema,
  formData,
}: {
  schema: Schema;
  formData: FormData;
}): SchemaToType<Schema> {
  const formattedData: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  schema.forEach((field) => {
    const key = field.name;

    // Handle multiple values (like multiple select or checkboxes)
    if ((field.type === "select" || field.type === "radio") && field.multiple) {
      const values = formData.getAll(key).filter(Boolean);

      if (field.required && values.length === 0) {
        errors[key] = `${field.label || key} is required`;
      }

      formattedData[key] = values.map(String);
      return;
    }

    const value = formData.get(key);

    // Required field validation
    if (field.required && (value === null || value === "")) {
      errors[key] = `${field.label || key} is required`;
      return;
    }

    // Handle empty optional fields
    if (value === null || value === "") {
      formattedData[key] = field.defaultValue ?? null;
      return;
    }

    try {
      switch (field.type) {
        case "checkbox":
          formattedData[key] = value === "on" || value === "true";
          break;

        case "email": {
          const email = String(value);
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            errors[key] = `${field.label || key} must be a valid email address`;
          }
          formattedData[key] = email;
          break;
        }

        case "select":
        case "radio": {
          const stringValue = String(value);
          if (field.options && !field.options.includes(stringValue)) {
            errors[key] = `${
              field.label || key
            } must be one of the available options`;
          }
          formattedData[key] = stringValue;
          break;
        }

        case "date":
        case "datetime": {
          const date = new Date(value as string);
          if (isNaN(date.getTime())) {
            errors[key] = `${field.label || key} must be a valid date`;
            break;
          }
          formattedData[key] = date.toISOString();
          break;
        }

        case "number": {
          const num = Number(value);
          if (isNaN(num)) {
            errors[key] = `${field.label || key} must be a valid number`;
            break;
          }
          formattedData[key] = num;
          break;
        }

        case "file": {
          const file = value as File;
          if (!(file instanceof File)) {
            errors[key] = `${field.label || key} must be a valid file`;
            break;
          }
          formattedData[key] = file;
          break;
        }

        default:
          formattedData[key] = String(value);
      }
    } catch (error) {
      errors[key] = `Invalid value for ${field.label || key}`;
    }
  });

  if (Object.keys(errors).length > 0) {
    throw new FormValidationError(errors);
  }

  return formattedData as SchemaToType<Schema>;
}

// FORM COMPONENT ------------------------------------------------------------------------

type Handlers = {
  text: (props: Extract<Field, { type: "text" }>) => ReactNode;
  textarea: (props: Extract<Field, { type: "textarea" }>) => ReactNode;
  number: (props: Extract<Field, { type: "number" }>) => ReactNode;
  file: (props: Extract<Field, { type: "file" }>) => ReactNode;
  date: (props: Extract<Field, { type: "date" }>) => ReactNode;
  datetime: (props: Extract<Field, { type: "datetime" }>) => ReactNode;
  email: (props: Extract<Field, { type: "email" }>) => ReactNode;
  checkbox: (props: Extract<Field, { type: "checkbox" }>) => ReactNode;
  select: (props: Extract<Field, { type: "select" }>) => ReactNode;
  radio: (props: Extract<Field, { type: "radio" }>) => ReactNode;
  hidden: (props: Extract<Field, { type: "hidden" }>) => ReactNode;
};

type ExtractPropsForHandler<Handler extends (props: any) => ReactNode> =
  Parameters<Handler>[0];

export type HandlerProps<Key extends keyof Handlers> = ExtractPropsForHandler<
  Handlers[Key]
>;

type CustomBlockBase = { readonly __typename: string };
export type CustomBlocksBase = readonly CustomBlockBase[];

export type FormProps = {
  schema: Field[];
  components?: Partial<Handlers>;
  disableDefaultComponents?: boolean;
  children?: ReactNode;
  action:
    | {
        type: "send";
        ingestKey: string;
      }
    | {
        type: "update";
        adminKey: string;
        eventId: string;
      };
} & Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "action" | "onSubmit" | "children"
>;

export const unstable_Form = ({
  schema,
  components,
  disableDefaultComponents,
  children,
  action,
  ...rest
}: FormProps): ReactNode => {
  const fields = schema as Field[] | undefined;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const formattedData: Record<string, unknown> = {};

      fields?.forEach((field) => {
        const key = field.name;
        const value = formData.get(key);
        switch (field.type) {
          case "checkbox":
            formattedData[key] = value === "on";
            break;
          case "select":
            formattedData[key] = String(value).split(",");
            break;
          case "radio":
            formattedData[key] = value;
            break;
          case "date":
          case "datetime":
            formattedData[key] = new Date(value as string).toISOString();
            break;
          case "number":
            formattedData[key] = Number(value);
            break;
          default:
            formattedData[key] = value;
        }
      });

      if (action.type === "update") {
        await updateEvent(
          action.adminKey as any,
          action.eventId,
          formattedData
        );
      } else {
        await sendEvent(action.ingestKey as any, formattedData);
      }
    },
    [action, fields]
  );

  return (
    <form {...rest} onSubmit={handleSubmit}>
      {fields?.map((node, index) => (
        <FieldNode
          field={node}
          key={index}
          components={components}
          disableDefaultComponents={disableDefaultComponents}
        />
      ))}
      {children ?? <button type="submit">Submit</button>}
    </form>
  );
};

const defaultHandlers: Handlers = {
  text: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type="text"
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  textarea: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.name}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  number: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type="number"
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  file: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.name} type="file" />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  date: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.name} type="date" />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  datetime: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.name} type="datetime-local" />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  email: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type="email"
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  checkbox: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        defaultChecked={props.defaultValue === "true"}
      />
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  select: (props) => (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} name={props.name} multiple={props.multiple}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {props.helpText && <small>{props.helpText}</small>}
    </div>
  ),
  radio: (props) => (
    <fieldset>
      <legend>{props.label}</legend>
      {props.options.map((option) => (
        <div key={option}>
          <input
            id={option}
            name={props.name}
            type="radio"
            value={option}
            defaultChecked={props.defaultValue === option}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      {props.helpText && <small>{props.helpText}</small>}
    </fieldset>
  ),
  hidden: (props) => <input id={props.id} name={props.name} type="hidden" />,
};

const FieldNode = ({
  field,
  components,
  disableDefaultComponents,
}: {
  field: Field;
  components?: Partial<Handlers>;
  disableDefaultComponents?: boolean;
}) => {
  const Handler: Handlers[keyof Handlers] | undefined =
    components?.[field.type] ??
    (!disableDefaultComponents ? defaultHandlers[field.type] : undefined) ??
    (() => <></>);

  // @ts-expect-error Distinctive union breaks with type inference
  return <Handler {...field} />;
};
