import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./AppRouter";
import ErrorBoundary from "./components/utility/ErrorBoundary";
import Motion from "./components/utility/Motion";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Motion>
          <div className="flex justify-center">
            <div className="custom-sm:w-custom sm:w-7/12 xl:w-5/12">
              <AppRouter />
            </div>
          </div>
        </Motion>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
