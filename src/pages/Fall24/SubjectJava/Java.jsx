import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Java1 from "./Java1";
import Java2 from "./Java2";
import Java3 from "./Java3";
import GoBackButton from "../../../components/utility/GoBackButton";
import SubjectItem from "../../../components/subjects/SubjectItem";

const Java = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "Java" && subPath !== "";

  const listItems = [
    {
      to: "Java1",
      header: "Header1",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Java2",
      header: "Header2",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Java3",
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
          <h1 className="my-14 text-3xl font-semibold font-piazzolla">Java</h1>
          <ul>
            {listItems.map((item) => (
              <SubjectItem key={item.to} {...item} />
            ))}
          </ul>
          <GoBackButton to="/" label="← Home" />
        </nav>
      )}
      <Routes>
        <Route path="Java1" element={<Java1 />} />
        <Route path="Java2" element={<Java2 />} />
        <Route path="Java3" element={<Java3 />} />
      </Routes>
    </div>
  );
};

export default Java;
