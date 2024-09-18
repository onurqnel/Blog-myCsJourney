import React from "react";
import Note from "../../components/markdown/Markdown";
import GoBackButton from "../../components/utility/GoBackButton";

const EthicsAndPrivacy = () => {
  return (
    <div className="relative min-h-screen">
      <div className="my-24">
        <Note notePath="/notes/InformationSystems/EthicsAndPrivacy.md" />
      </div>
      <GoBackButton to="/InformationSystems" label="← Previous" />
    </div>
  );
};

export default EthicsAndPrivacy;
