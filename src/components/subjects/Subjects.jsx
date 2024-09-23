import React, { useState } from "react";
import TermListItem from "./TermListItem";
import { termData } from "../../data/termData";

const Subjects = () => {
  const [openTerms, setOpenTerms] = useState([]);
  const handleTermClick = (term) => {
    if (openTerms.includes(term)) {
      setOpenTerms(openTerms.filter((t) => t !== term));
    } else {
      setOpenTerms([...openTerms, term]);
    }
  };

  return (
    <div className="font-piazzolla my-12">
      {termData.map((termData) => (
        <div key={termData.term} className="mb-6">
          <h2
            className="text-xl font-semibold mb-4 cursor-pointer hover:underline"
            onClick={() => handleTermClick(termData.term)}
          >
            {termData.term}
          </h2>
          {openTerms.includes(termData.term) && (
            <ul className="space-y-6">
              {termData.subjects.map((subject) => (
                <TermListItem key={subject.to} {...subject} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Subjects;