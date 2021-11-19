import { useHistory } from "react-router-dom";

const Button = () => {
  const history = useHistory();

  return <button onClick={() => history.goBack()}>Grįžti atgal</button>;
};

export default Button;
