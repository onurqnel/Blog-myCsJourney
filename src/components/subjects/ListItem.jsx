import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ to, header, date, description }) => {
  return (
    <li className="mb-8">
      <Link
        to={to}
        className="text-2xl hover:underline font-medium font-piazzolla"
      >
        {header}
      </Link>
      <span className="font-piazzolla text-sm text-gray-500 ml-4">{date}</span>
      <p className="my-8 font-piazzolla">{description}</p>
    </li>
  );
};

export default ListItem;
