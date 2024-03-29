import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center  inset-x-0 px-2 mt-7">
        <div className="flex flex-wrap fixed justify-center gap-3 shadow-lg bg-white px-2 py-2 border rounded-xl">
          <button className="outline-none px-4 py-2 bg-red-600 rounded-full"
          //callback function
          onClick={()=>setColor("red")}>                            
            Red
          </button>
          <button className="outline-none px-4 py-2 bg-black rounded-full text-white"
          onClick={()=>setColor("black")}>
            black
          </button>
          <button className="outline-none px-4 py-2 bg-blue-600 rounded-full text-white"
          onClick={()=>setColor("blue")}>
            Blue
          </button>
          <button className="outline-none px-4 py-2 bg-yellow-600 rounded-full text-white"
          onClick={()=>setColor("yellow")}>
            yellow
          </button>
          <button className="outline-none px-4 py-2 bg-slate-600 rounded-full text-white"
          onClick={()=>setColor("gray")}>
            gray
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
