import React from "react";
import Note from "../../components/markdown/Markdown";
import GoBackButton from "../../components/utility/GoBackButton";

const IntroIS = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/Ml/Ml1.md" />
      </div>
      <GoBackButton to="/InformationSystems" label="← Previous" />
    </div>
  );
};

export default IntroIS;
