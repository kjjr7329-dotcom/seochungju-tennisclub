import React from "react";
import { createRoot } from "react-dom/client";

const App = React.createElement(
  "div",
  { className: "p-10 text-center" },
  [
    React.createElement(
      "h1",
      { className: "text-3xl font-bold text-blue-600", key: 1 },
      "서충주신도시 테니스클럽 🎾"
    ),
    React.createElement(
      "p",
      { className: "mt-4 text-gray-600", key: 2 },
      "정상적으로 배포되었습니다."
    )
  ]
);

createRoot(document.getElementById("root")).render(App);
