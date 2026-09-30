import type { ReactNode } from "react";

// Define the input and output types
interface FaqInput {
  question: string;
  answer: ReactNode;
}

interface FaqOutput {
  question: string;
  answer: string;
}

const getTextFromReactNode = (node: ReactNode): string => {
  if (
    node === null ||
    typeof node === "boolean" ||
    typeof node === "undefined"
  ) {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return node.toString();
  }
  if (Array.isArray(node)) {
    return node.map(getTextFromReactNode).join(" ");
  }
  if (
    typeof node === "object" &&
    node !== null &&
    "props" in node &&
    node.props &&
    typeof node.props === "object" &&
    node.props !== null &&
    "children" in node.props
  ) {
    return getTextFromReactNode(node.props.children as ReactNode);
  }
  return "";
};

export const convertFaqsForSchema = (faqs: FaqInput[]): FaqOutput[] => {
  return faqs.map(({ question, answer }) => {
    const plainTextAnswer = getTextFromReactNode(answer)
      .trim()
      .replace(/\s+/g, " ");

    return {
      question,
      answer: plainTextAnswer,
    };
  });
};
