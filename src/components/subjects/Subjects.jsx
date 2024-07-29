import React from "react";
import SubjectListItem from "./SubjectListItem";

const subjectData = [
  { to: "/Csharp", title: "C#", date: "Jan 13, 2024" },
  { to: "/Java", title: "Java", date: "Feb 13, 2024" },
  { to: "/Mathematics", title: "Mathematics", date: "Mar 13, 2024" },
  { to: "/Ml", title: "Machine Learning", date: "Apr 13, 2024" },
  { to: "/Database", title: "Database Systems", date: "May 13, 2024" },
];

const Subjects = () => {
  return (
    <div className="font-piazzolla my-12">
      <ul className="space-y-6">
        {subjectData.map((subject) => (
          <SubjectListItem key={subject.to} {...subject} />
        ))}
      </ul>
    </div>
  );
};

export default Subjects;
