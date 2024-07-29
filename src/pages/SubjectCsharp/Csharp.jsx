import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SubProfilePicture from "../../components/picture/SubProfilePicture";
import Csharp1 from "./Csharp1";
import Csharp2 from "./Csharp2";
import Csharp3 from "./Csharp3";
import GoBackButton from "../../components/utility/GoBackButton";
import ListItem from "../../components/subjects/ListItem";

const Csharp = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "Csharp" && subPath !== "";

  const listItems = [
    {
      to: "Csharp1",
      header: "Header1",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Csharp2",
      header: "Header2",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Csharp3",
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
          <h1 className="my-14 text-3xl font-semibold font-piazzolla">C#</h1>
          <ul>
            {listItems.map((item) => (
              <ListItem key={item.to} {...item} />
            ))}
          </ul>
          <GoBackButton to="/" label="← Home" />
        </nav>
      )}
      <Routes>
        <Route path="Csharp1" element={<Csharp1 />} />
        <Route path="Csharp2" element={<Csharp2 />} />
        <Route path="Csharp3" element={<Csharp3 />} />
      </Routes>
    </div>
  );
};

export default Csharp;
