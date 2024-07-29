import React from "react";
import ReactMarkdown from "react-markdown";
import MarkdownContent from "./MarkdownContent";

const Markdown = ({ notePath }) => {
  const content = MarkdownContent(notePath);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
