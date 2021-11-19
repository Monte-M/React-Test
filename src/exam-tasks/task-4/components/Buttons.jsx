import { useReducer, useState } from "react";
import css from "./Buttons.module.css";

const initLikeValues = { likeValue: 12, dislikeValue: 2 };

function counterReducer(state, action) {
  console.log("like type", action);

  switch (action.type) {
    case "FIRST_LIKE":
      return {
        likeValue: state.likeValue + 1,
        dislikeValue: state.dislikeValue,
      };
    case "LIKE":
      return {
        likeValue: state.likeValue + 1,
        dislikeValue: state.dislikeValue - 1,
      };
    case "FIRST_DISLIKE":
      return {
        dislikeValue: state.dislikeValue + 1,
        likeValue: state.likeValue,
      };
    case "DISLIKE":
      return {
        dislikeValue: state.dislikeValue + 1,
        likeValue: state.likeValue - 1,
      };
    default:
      return state;
  }
}

const Buttons = () => {
  const [state, dispatch] = useReducer(counterReducer, initLikeValues);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked === false && disliked === false) {
      dispatch({ type: "FIRST_LIKE" });
      setLiked(true);
      setDisliked(false);
    }
    if (disliked === true && liked === false) {
      dispatch({ type: "LIKE" });
      setLiked(true);
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    if (disliked === false && liked === false) {
      dispatch({ type: "FIRST_DISLIKE" });
      setDisliked(true);
      setLiked(false);
    }
    if (liked === true && disliked === false) {
      dispatch({ type: "DISLIKE" });
      setDisliked(true);
      setLiked(false);
    }
  };

  const setLikeClass = () => {
    let classes = "fa fa-thumbs-up ";
    if (liked === true) {
      classes += "like";
    }
    return classes;
  };

  const setDislikeClass = () => {
    let classes = "fa fa-thumbs-down ";
    if (disliked === true) {
      classes += "dislike";
    }
    return classes;
  };

  return (
    <div className={css.container}>
      <i onClick={handleLike} className={setLikeClass()} aria-hidden="true">
        <span>{state.likeValue}</span>
      </i>
      <i
        onClick={handleDislike}
        className={setDislikeClass()}
        aria-hidden="true"
      >
        <span>{state.dislikeValue}</span>
      </i>
    </div>
  );
};

export default Buttons;
