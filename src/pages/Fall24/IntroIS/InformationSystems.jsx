import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import IntroIS from "./IntroIS";
import OSandCA from "./OSandCA";
import EthicsAndPrivacy from "./EthicsAndPrivacy";
import GoBackButton from "../../../components/utility/GoBackButton";
import SubjectItem from "../../../components/subjects/SubjectItem";

const InformationSystems = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "InformationSystems" && subPath !== "";

  const listItems = [
    {
      to: "IntroIS",
      header: "Introduction to Information Systems",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "OSandCA",
      header: "Organizational Strategy & Competitive Advantage",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
    {
      to: "EthicsAndPrivacy",
      header: "Ethics & Privacy",
      date: "Feb 13",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit dicta officia et aliquam nulla dolores necessitatibus reprehenderit nisi odio!",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {!isSubSubject && (
        <nav>
          <h1 className="my-14 text-3xl font-semibold font-piazzolla">
            Information Systems
          </h1>
          <ul>
            {listItems.map((item) => (
              <SubjectItem key={item.to} {...item} />
            ))}
          </ul>
          <GoBackButton to="/" label="← Home" />
        </nav>
      )}
      <Routes>
        <Route path="IntroIS" element={<IntroIS />} />
        <Route path="OSandCA" element={<OSandCA />} />
        <Route path="EthicsAndPrivacy" element={<EthicsAndPrivacy />} />
      </Routes>
    </div>
  );
};

export default InformationSystems;
