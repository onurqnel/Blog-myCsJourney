import React from "react";
import Note from "../../../components/markdown/Markdown";
import GoBackButton from "../../../components/utility/GoBackButton";

const Database3 = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/Database/Database3.md" />
      </div>
      <GoBackButton to="/Database" label="← Previous" />
    </div>
  );
};

export default Database3;
