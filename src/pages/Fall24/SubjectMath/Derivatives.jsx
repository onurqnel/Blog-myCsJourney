import React from "react";
import MathMarkdown from "../../../components/markdown/MathMarkdown";
import GoBackButton from "../../../components/utility/GoBackButton";

const Derivatives = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <h1 className="text-4xl font-bold font-piazzolla">Derivatives</h1>
        <br />
        <MathMarkdown notePath="/notes/Mathematics/Derivatives.md" />
      </div>
      <GoBackButton to="Fall24/Mathematics" label="← Previous" />
    </div>
  );
};

export default Derivatives;
