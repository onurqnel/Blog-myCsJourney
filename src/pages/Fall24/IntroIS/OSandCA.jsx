import React from "react";
import Note from "../../../components/markdown/Markdown";
import GoBackButton from "../../../components/utility/GoBackButton";

const OSandCA = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/InformationSystems/OSandCA.md" />
      </div>
      <GoBackButton to="/InformationSystems" label="← Previous" />
    </div>
  );
};

export default OSandCA;
