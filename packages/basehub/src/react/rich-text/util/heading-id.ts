import { RichTextNode } from "@basehub/mutation-api-helpers";

export function extractTextFromNode(node?: RichTextNode) {
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
