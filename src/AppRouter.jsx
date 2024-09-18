import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const Csharp = lazy(() => import("./pages/Fall24/SubjectCsharp/Csharp"));
const Java = lazy(() => import("./pages/Fall24/SubjectJava/Java"));
const Mathematics = lazy(() =>
  import("./pages/Fall24/SubjectMath/Mathematics")
);
const Database = lazy(() => import("./pages/Fall24/SubjectDatabase/Database"));
const InformationSystems = lazy(() =>
  import("./pages/Fall24/IntroIS/InformationSystems")
);

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Fall24/Csharp/*" element={<Csharp />} />
            <Route path="/Fall24/Java/*" element={<Java />} />
            <Route path="/Fall24/Mathematics/*" element={<Mathematics />} />
            <Route path="/Fall24/Database/*" element={<Database />} />
            <Route
              path="/Fall24/InformationSystems/*"
              element={<InformationSystems />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
