import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-600">
        서충주신도시 테니스클럽 🎾
      </h1>
      <p className="mt-4 text-gray-600">
        정상적으로 배포되었습니다.
      </p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
