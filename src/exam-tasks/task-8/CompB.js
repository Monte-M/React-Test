import React from "react";
import { CounterContext } from "./Task8";

function CompB() {
  const { handleDecrease } = React.useContext(CounterContext);
  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CompB;
