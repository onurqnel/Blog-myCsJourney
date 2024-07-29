import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SubProfilePicture from "../../components/picture/SubProfilePicture";
import Database1 from "./Database1";
import Database2 from "./Database2";
import Database3 from "./Database3";
import GoBackButton from "../../components/utility/GoBackButton";
import ListItem from "../../components/subjects/ListItem";

const Database = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "Database" && subPath !== "";

  const listItems = [
    {
      to: "Database1",
      header: "Header1",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Database2",
      header: "Header2",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Database3",
      header: "Header3",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {!isSubSubject && (
        <nav>
          <SubProfilePicture />
          <h1 className="my-14 text-3xl font-semibold font-piazzolla">
            Database Systems
          </h1>
          <ul>
            {listItems.map((item) => (
              <ListItem key={item.to} {...item} />
            ))}
          </ul>
          <GoBackButton to="/" label="← Home" />
        </nav>
      )}
      <Routes>
        <Route path="Database1" element={<Database1 />} />
        <Route path="Database2" element={<Database2 />} />
        <Route path="Database3" element={<Database3 />} />
      </Routes>
    </div>
  );
};

export default Database;
