import css from "./Item.module.css";

const Item = ({ image, title }) => {
  return (
    <div className={css.container}>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default Item;
