import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import SubProfilePicture from "../../components/picture/SubProfilePicture";
import Ml1 from "./Ml1";
import Ml2 from "./Ml2";
import Ml3 from "./Ml3";
import GoBackButton from "../../components/utility/GoBackButton";

const Ml = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/").pop();
  const isSubSubject = subPath !== "Ml" && subPath !== "";

  return (
    <div className="relative min-h-screen">
      {!isSubSubject && (
        <nav>
          <SubProfilePicture />
          <h1 className="my-14 text-3xl font-semibold font-piazzolla">
            Machine Learning
          </h1>

          <ul>
            <li>
              <Link
                to="Ml1"
                className="text-2xl hover:underline font-medium font-piazzolla"
              >
                Header1
              </Link>
              <span className="font-piazzolla text-sm text-gray-500 ml-4">
                Feb 13
              </span>
            </li>
            <p className="my-8 font-piazzolla">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit
              dicta officia et aliquam nulla dolores necessitatibus
              reprehenderit nisi odio!
            </p>
            <li>
              <Link
                to="Ml2"
                className="text-2xl hover:underline font-medium font-piazzolla"
              >
                Header2
              </Link>
              <span className="font-piazzolla text-sm text-gray-500 ml-4">
                Feb 13
              </span>
            </li>
            <p className="my-8 font-piazzolla">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit
              dicta officia et aliquam nulla dolores necessitatibus
              reprehenderit nisi odio!
            </p>
            <li>
              <Link
                to="Ml3"
                className="text-2xl hover:underline font-medium font-piazzolla"
              >
                Header3
              </Link>
              <span className="font-piazzolla text-sm text-gray-500 ml-4">
                Feb 13
              </span>
            </li>
            <p className="my-8 font-piazzolla">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              cum architecto unde ea dolor explicabo nam quod nisi! Rerum fugit
              dicta officia et aliquam nulla dolores necessitatibus
              reprehenderit nisi odio!
            </p>
          </ul>
          <GoBackButton to="/" label="← Home" />
        </nav>
      )}
      <Routes>
        <Route path="Ml1" element={<Ml1 />} />
        <Route path="Ml2" element={<Ml2 />} />
        <Route path="Ml3" element={<Ml3 />} />
      </Routes>
    </div>
  );
};

export default Ml;
