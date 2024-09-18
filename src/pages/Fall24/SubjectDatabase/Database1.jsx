import React from "react";
import Note from "../../../components/markdown/Markdown";
import GoBackButton from "../../../components/utility/GoBackButton";

const Database1 = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/Database/Database1.md" />
      </div>
      <GoBackButton to="/Database" label="← Previous" />
    </div>
  );
};

export default Database1;
