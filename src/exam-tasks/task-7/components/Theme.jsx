import { useRef } from "react";

import css from "./Theme.module.css";

const Theme = () => {
  const box = useRef();

  const handleLightTheme = () => {
    box.current.style.background = "#f1f1f1";
    box.current.style.color = "#000000";
  };

  const handleDarkTheme = () => {
    box.current.style.background = "#000000";
    box.current.style.color = "#f1f1f1";
  };

  return (
    <div ref={box} className={css.container}>
      <h1>You can change background color by using useRef</h1>
      <p>Click on one of the buttons down below to see how it works</p>
      <button onClick={handleLightTheme}>Light Theme</button>
      <button onClick={handleDarkTheme}>Dark Theme</button>
    </div>
  );
};

export default Theme;
