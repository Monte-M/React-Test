import React, { useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

import css from "./Task8.module.css";

export const CounterContext = React.createContext(0);

function Task8() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    if (counter >= 100) return;
    setCounter(counter + 10);
  };
  const handleDecrease = () => setCounter(counter - 10);

  return (
    <div className="container">
      <div className={css.container}>
        <CounterContext.Provider value={{ handleIncrease, handleDecrease }}>
          <h3>Counter: {counter}</h3>
          {counter >= 100 && <p>Didinti nebegalima</p>}
          <CompA />
          <CompB />
        </CounterContext.Provider>
      </div>
      <h3>Task 8</h3>
    </div>
  );
}

export default Task8;

/* Task 8 
task-8 aplanke rasite kelis komponetus. Task8 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>). +

Task8 komponentų medis +
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB +
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10. +
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima" +

Pastaba: naudokite useState, useContext (Context API).

*/
