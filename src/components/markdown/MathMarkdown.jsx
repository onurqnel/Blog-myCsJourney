import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import MarkdownContent from "./MarkdownContent";

const MathMarkdown = ({ notePath }) => {
  const content = MarkdownContent(notePath);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [content]);

  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
};

export default MathMarkdown;
