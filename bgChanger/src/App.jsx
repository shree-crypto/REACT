import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className=" w-full h-screen app"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("")}
              className="outline-none bg-red-400 px-4 py-1 rounded-full text-white shadow-lg"
            >
              RED
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "blue",
              }}
            >
              BLUE
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "green",
              }}
            >
              GREEN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
