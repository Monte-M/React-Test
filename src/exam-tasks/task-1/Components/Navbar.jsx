import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={css.nav}>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
