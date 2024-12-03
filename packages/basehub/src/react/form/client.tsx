"use client";
import { sendEvent, updateEvent } from "../../events";
import { FieldNode, type Field, type FormProps } from "./primitive";
import type { ReactNode } from "react";

export const unstable_Form = ({
  schema,
  components,
  disableDefaultComponents,
  children,
  action,
  ...rest
}: FormProps): ReactNode => {
  const fields = schema as Field[] | undefined;

  return (
    <form
      {...rest}
      onSubmit={(e) => {
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
              break;
          }
        });
        if (action.type === "update") {
          updateEvent(action.adminKey as any, action.eventId, formattedData);
        } else {
          sendEvent(action.ingestKey as any, formattedData);
        }
      }}
    >
      {fields?.map((node, index) => {
        return (
          <FieldNode
            field={node}
            key={index}
            components={components}
            disableDefaultComponents={disableDefaultComponents}
          />
        );
      })}
      {children ?? <button type="submit">Submit</button>}
    </form>
  );
};
