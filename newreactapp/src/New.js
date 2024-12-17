import React, { useState } from "react";
import Comp1 from "./components/Comp1";

function CounterApp() {
  // State to track the counter value
  const [count, setCount] = useState(0);

  // Functions to handle button clicks
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
      <Comp1 />
    </div>
  );
}

export default CounterApp;
