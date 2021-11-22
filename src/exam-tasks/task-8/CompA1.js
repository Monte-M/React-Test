import React from "react";
import { CounterContext } from "./Task8";

function CompA1() {
  const { handleIncrease, handleDecrease } = React.useContext(CounterContext);
  return (
    <div>
      <h3>CompA1</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CompA1;
