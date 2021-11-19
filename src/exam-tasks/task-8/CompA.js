import React from "react";
import CompA1 from "./CompA1";
import { CounterContext } from "./Task8";

function CompA() {
  const { handleIncrease } = React.useContext(CounterContext);
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <CompA1 />
    </div>
  );
}

export default CompA;
