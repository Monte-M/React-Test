import { useState } from "react";
import css from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const [adult, setAdult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!age || !surname || !age) return;
    if (age < 18) {
      setAdult(false);
    }
    if (age >= 18) {
      setAdult(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <input
        type="text"
        placeholder="Vardas"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Pavardė"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amžius"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {adult === true && <h4>Dėkojame, kad užsiregistravote</h4>}
      {adult === false && (
        <h4>
          Deja, registracija negalima. Registruotis galima tik nuo 18 metų
        </h4>
      )}
      <button>Pateikti</button>
    </form>
  );
};

export default Form;
