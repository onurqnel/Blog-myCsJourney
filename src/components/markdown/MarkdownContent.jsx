import { useState, useEffect } from "react";

const MarkdownContent = (notePath) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(notePath)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) =>
        console.error("Error fetching the Markdown file:", error)
      );
  }, [notePath]);

  return content;
};

export default MarkdownContent;
