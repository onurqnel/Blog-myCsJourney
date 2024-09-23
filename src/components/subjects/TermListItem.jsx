import React from "react";
import { Link } from "react-router-dom";

const TermListItem = ({ to, title, date }) => {
  return (
    <li className="flex justify-between items-center">
      <Link to={to} className="text-xl hover:underline flex-1">
        {title}
      </Link>
      <span className="text-sm text-gray-500 ml-4">{date}</span>
    </li>
  );
};

export default TermListItem;
