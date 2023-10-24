import { Children, isValidElement, ReactNode } from "react";

export function extractTextFromChildren(children?: ReactNode) {
  let textContent = "";

  Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      textContent += child;
    } else if (isValidElement(child) && child.props.children) {
      textContent += extractTextFromChildren(child.props.children);
    }
  });

  return textContent;
}
