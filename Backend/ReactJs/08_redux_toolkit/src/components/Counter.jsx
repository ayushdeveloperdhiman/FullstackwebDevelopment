import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const handleInputChange = (event) => {
    setIncrementAmount(Number(event.target.value));
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
    setIncrementAmount(0);
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Counter: {counter}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <input
          type="number"
          className="border rounded p-2"
          value={incrementAmount}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
          onClick={handleIncrementByAmount}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
