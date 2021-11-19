import Button from "./Button";
import css from "./Twitter.module.css";

const buttonArr = [
  {
    id: 1,
    text: "Sign up",
    btnClass: "sign-up",
  },
  {
    id: 2,
    text: "Log in",
    btnClass: "log-in",
  },
];

const Twitter = () => {
  return (
    <div className={css.container}>
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <h1>Happening now</h1>
      <h3>Join Twitter today.</h3>
      <div className={css.buttons}>
        {buttonArr.map(({ id, text, btnClass }) => (
          <Button key={id} text={text} btnClass={btnClass} />
        ))}
      </div>
    </div>
  );
};

export default Twitter;
