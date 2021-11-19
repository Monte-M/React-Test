import React from "react";
import { CounterContext } from "./Task8";

function CompA1() {
  const { counter } = React.useContext(CounterContext);
  return (
    <div>
      <h3>Counter: {counter}</h3>
      {counter >= 100 && <h4>Didinti nebegalima</h4>}
    </div>
  );
}

export default CompA1;
