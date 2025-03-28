import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2
      "
        >
          <div
            className="flex flex-wrap justify-center gap-3
          shadow-xl bg-white px-3 py-2 rounded-3xl text-white"
          >
            <button
              onClick={() => setColor("#f4837d")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "#f4837d" }}
            >
              Rose
            </button>
            <button
              onClick={() => setColor("#99b998")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "#99b998" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("#1e526e")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "#1e526e" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("#f6dd4e")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "#f6dd4e"}}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "Lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("#191919")}
              className="outline-none px-4 py-1 shadow-lg rounded-full"
              style={{ backgroundColor: "#191919" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
