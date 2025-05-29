import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-8 ">
        <h1 className="text-red-500">Unified Mentor</h1>
        <Button label="Primary"></Button>
      </div>
    </>
  );
}

export default App;
