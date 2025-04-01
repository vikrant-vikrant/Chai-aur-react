import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App.jsx";

const anotherElement = React.createElement(
  "h1",
  { className: "kaka" },
  "pakistan"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* anotherElement */}
  </StrictMode>
);
