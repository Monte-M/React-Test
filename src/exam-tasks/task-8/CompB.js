import React from "react";
import { CounterContext } from "./Task8";

function CompB() {
  const { handleIncrease, handleDecrease } = React.useContext(CounterContext);
  return (
    <div>
      <h2>CompB</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CompB;
