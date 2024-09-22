import React, { useState } from "react";
import SubjectListItem from "./SubjectListItem";
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
      {termData.map((term) => (
        <div key={term.term} className="mb-6">
          <h2
            className="text-xl font-semibold mb-4 cursor-pointer hover:underline"
            onClick={() => handleTermClick(term.term)}
          >
            {term.term}
          </h2>
          {openTerms.includes(term.term) && (
            <ul className="space-y-6">
              {term.subjects.map((subject) => (
                <SubjectListItem key={subject.to} {...subject} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Subjects;
