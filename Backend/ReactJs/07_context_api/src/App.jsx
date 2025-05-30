import { useContext } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";

function App() {
  const { state, toggleTheme } = useContext(AppContext);
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        state.theme === "light"
          ? "bg-white text-black"
          : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">Unified Mentor</h1>
      <h2 className="text-lg font-bold mb-4">Context API with Vite</h2>
      <p className="text-lg mb-4">Current Theme: {state.theme}</p>
      <button
        className="bg-blue-500 text-white hover:bg-blue-700 rounded px-4 py-2"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
