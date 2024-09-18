import React from "react";
import MathMarkdown from "../../components/markdown/MathMarkdown";
import GoBackButton from "../../components/utility/GoBackButton";

const Limits = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <MathMarkdown notePath="/notes/Mathematics/Limits.md" />
      </div>
      <GoBackButton to="Fall24/Mathematics" label="← Previous" />
    </div>
  );
};

export default Limits;
