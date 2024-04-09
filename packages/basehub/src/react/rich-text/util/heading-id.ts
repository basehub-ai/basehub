import { Node } from "../primitive";

export function extractTextFromNode(node?: Node) {
  let textContent = "";

  node?.content?.forEach((child) => {
    if (child.type === "text") {
      textContent += child.text;
    }
    if ("content" in child && child.content) {
      extractTextFromNode(child);
    }
  });

  return textContent;
}
