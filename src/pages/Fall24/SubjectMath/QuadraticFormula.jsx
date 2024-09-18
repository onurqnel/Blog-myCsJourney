import React from "react";
import MathMarkdown from "../../../components/markdown/MathMarkdown";
import GoBackButton from "../../../components/utility/GoBackButton";

const QuadraticFormula = () => {
  return (
    <div className="relative min-h-screen  font-medium font-piazzolla">
      <div className="my-24">
        <h1 className="text-2xl font-bold font-piazzolla">Quadratic Formula</h1>
        <br />
        <MathMarkdown notePath="/notes/Mathematics/QuadraticFormula.md" />
      </div>
      <GoBackButton to="Fall24/Mathematics" label="← Previous" />
    </div>
  );
};

export default QuadraticFormula;
