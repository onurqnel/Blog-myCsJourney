import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";

const Java = lazy(() => import("./pages/SubjectJava/Java"));
const Mathematics = lazy(() => import("./pages/SubjectMath/Mathematics"));
const InformationSystems = lazy(() => import("./pages/IntroIS/InformationSystems"));
const Database = lazy(() => import("./pages/SubjectDatabase/Database"));
const Csharp = lazy(() => import("./pages/SubjectCsharp/Csharp"));

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/" />} />
            <Route path="/Java/*" element={<Java />} />
            <Route path="/Mathematics/*" element={<Mathematics />} />
            <Route path="/InformationSystems/*" element={<InformationSystems />} />
            <Route path="/Database/*" element={<Database />} />
            <Route path="/Csharp/*" element={<Csharp />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
