/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

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

type Handlers = {
  text: (props: Extract<Field, { type: "text" }>) => ReactNode;
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

export const FieldNode = ({
  field,
  components,
  disableDefaultComponents,
}: {
  field: Field;
  components?: Partial<Handlers>;
  disableDefaultComponents?: boolean;
}) => {
  let Handler: Handlers[keyof Handlers] | undefined;
  if (components) {
    Handler = components[field.type];
  }

  if (!Handler && !disableDefaultComponents) {
    Handler = defaultHandlers[field.type];
  } else if (!Handler) {
    Handler = () => <></>;
  }

  // @ts-expect-error
  return <Handler {...field} />;
};
