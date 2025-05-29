import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter++);
  };

  const decrement = () => {
    setCounter(counter--);
  };

  const reset = () => setCounter(0);
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <br />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
