import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SubProfilePicture from "../../components/picture/SubProfilePicture";
import AnalyticGeometry from "./AnalyticGeometry";
import Functions from "./Functions";
import Limits from "./Limits";
import GoBackButton from "../../components/utility/GoBackButton";
import ListItem from "../../components/subjects/ListItem";

const Mathematics = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "Mathematics" && subPath !== "";

  const listItems = [
    {
      to: "AnalyticGeometry",
      header: "Analytic Geometry",
      date: "Feb 13",
      description:
        "Analytic Geometry is essential for pre-Calculus. It covers important topics such as horizontal and vertical distances, the Pythagorean theorem, point-slope form, equations of parallel and perpendicular lines, unit angles of inclination, circles, and the distance between two points, along with various examples.",
    },
    {
      to: "Functions",
      header: "Functions",
      date: "Feb 13",
      description:
        "Includes circle equation, function graphing, and testing with Vertical Line Test. Domain and range, piecewise functions, natural domain, domain issues in simplification, vertical and horizontal asymptotes, inequalities with domain and range examples, even and odd functions and how to test them, inverse functions, function composition, and trigonometric functions are covered. Additionally, reference angles, shifts and dilations, graphing, and Pythagorean identities are discussed.",
    },
    {
      to: "Limits",
      header: "Limits",
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
            Mathematics
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
        <Route path="AnalyticGeometry" element={<AnalyticGeometry />} />
        <Route path="Functions" element={<Functions />} />
        <Route path="Limits" element={<Limits />} />
      </Routes>
    </div>
  );
};

export default Mathematics;
