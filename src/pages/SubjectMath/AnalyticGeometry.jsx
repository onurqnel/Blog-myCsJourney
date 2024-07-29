import React from "react";
import MathMarkdown from "../../components/markdown/MathMarkdown";
import GoBackButton from "../../components/utility/GoBackButton";

const AnalyticGeometry = () => {
  return (
    <div className="relative min-h-screen  font-medium font-piazzolla">
      <div className="my-24">
        <h1 className="text-2xl font-bold font-piazzolla">Analytic Geometry</h1>
        <MathMarkdown notePath="/notes/Mathematics/AnalyticGeometry.md" />
      </div>
      <GoBackButton to="/Mathematics" label="← Previous" />
    </div>
  );
};

export default AnalyticGeometry;
