import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SubProfilePicture from "../../components/picture/SubProfilePicture";
import QuadraticFormula from "./QuadraticFormula";
import Limits from "./Limits";
import Derivatives from "./Derivatives";
import GoBackButton from "../../components/utility/GoBackButton";
import ListItem from "../../components/subjects/ListItem";

const Mathematics = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "Mathematics" && subPath !== "";

  const listItems = [
    {
      to: "QuadraticFormula",
      header: "Quadratic Formula",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Limits",
      header: "Limits, ε-δ Definition",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "Limits",
      header: "Derivatives",
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
            Calculus 1
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
        <Route path="QuadraticFormula" element={<QuadraticFormula />} />
        <Route path="Limits" element={<Limits />} />
        <Route path="Derivatives" element={<Derivatives />} />
      </Routes>
    </div>
  );
};

export default Mathematics;
