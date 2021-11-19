import Item from "../components/Item";
import css from "./Categories.module.css";

import posters from "../assets/posters.jpg";
import apparel from "../assets/apparel.jpg";
import stickers from "../assets/stickers.jpg";
import cups from "../assets/cups.jpg";
import calendars from "../assets/calendars.jpg";

const itemArr = [
  {
    id: 1,
    title: "POSTERS",
    image: posters,
  },
  {
    id: 2,
    title: "APPAREL",
    image: apparel,
  },
  {
    id: 3,
    title: "STICKERS",
    image: stickers,
  },
  {
    id: 4,
    title: "CUPS",
    image: cups,
  },
  {
    id: 5,
    title: "CALENDARS",
    image: calendars,
  },
];

const Categories = () => {
  return (
    <div className={css.container}>
      <h1>CATEGORIES</h1>
      <div className={css.itemContainer}>
        {itemArr.map(({ id, title, image }) => (
          <Item key={id} title={title} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
