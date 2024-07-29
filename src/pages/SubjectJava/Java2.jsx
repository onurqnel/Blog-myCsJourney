import React from "react";
import Note from "../../components/markdown/Markdown";
import GoBackButton from "../../components/utility/GoBackButton";

const Java2 = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/Java/Java2.md" />
      </div>
      <GoBackButton to="/Java" label="← Previous" />
    </div>
  );
};

export default Java2;
