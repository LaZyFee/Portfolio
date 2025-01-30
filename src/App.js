import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="lg:bg-custom-radial min-h-screen p-2">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;