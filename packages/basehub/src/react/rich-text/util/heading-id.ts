import { Node } from "..";

export function extractTextFromNode(node?: Node) {
  let textContent = "";

  node?.content?.forEach((child) => {
    if (child.type === "text") {
      textContent += child.text;
    }
    if (child.content) {
      extractTextFromNode(child);
    }
  });

  return textContent;
}

export function incrementID(id: string) {
  // duplicates are added "-n" at the end.
  // if the title already has a "-n" at the end, we'll need to increment it.
  const matches = id.match(/-(\d+)$/); // Fixed regex to match "-n" format
  if (matches?.[1] !== undefined) {
    const number = parseInt(matches[1], 10);
    return id.replace(/-(\d+)$/, `-${number + 1}`);
  }

  return `${id}-1`;
}
