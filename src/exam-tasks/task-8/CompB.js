import React from "react";
import { CounterContext } from "./Task8";

function CompB() {
  const { handleIncrease, handleDecrease } = React.useContext(CounterContext);
  return (
    <div>
      <h4>CompB</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CompB;
