import React from "react";
import TermListItem from "./TermListItem";

const TermList = () => {
  const terms = [
    { to: "/Fall24", title: "Fall 2024", date: "Jan 13, 2024" },
    { to: "/Winter25", title: "Winter 2025", date: "Jan 13, 2024" },
    { to: "/Fall25", title: "Fall 2025", date: "Jan 13, 2024" },
    { to: "/Winter26", title: "Winter 2026", date: "Jan 13, 2024" },
    { to: "/Fall26", title: "Fall 2026", date: "Jan 13, 2024" },
    { to: "/Winter27", title: "Winter 2027", date: "Jan 13, 2024" },
    { to: "/Fall27", title: "Fall 2027", date: "Jan 13, 2024" },
    { to: "/Winter", title: "Winter 2028", date: "Jan 13, 2024" },
  ];

  return (
    <ul>
      {terms.map((term) => (
        <TermListItem key={term.to} {...term} />
      ))}
    </ul>
  );
};

export default TermList;
