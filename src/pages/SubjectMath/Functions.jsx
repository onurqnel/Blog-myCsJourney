import React from "react";
import MathMarkdown from "../../components/markdown/MathMarkdown";
import GoBackButton from "../../components/utility/GoBackButton";

const Functions = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <MathMarkdown notePath="/notes/Mathematics/Functions.md" />
      </div>
      <GoBackButton to="/Mathematics" label="← Previous" />
    </div>
  );
};

export default Functions;
