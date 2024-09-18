import React from "react";
import Note from "../../../components/markdown/Markdown";
import GoBackButton from "../../../components/utility/GoBackButton";

const Csharp1 = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/Csharp/Csharp1.md" />
      </div>
      <GoBackButton to="/Csharp" label="← Previous" />
    </div>
  );
};

export default Csharp1;
