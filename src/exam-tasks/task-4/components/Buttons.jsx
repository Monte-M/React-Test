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

// ČIA YRA MANO SUGALVOTAS BŪDAS. JIS YRA VEIKIANTIS. Jeigu jis netiks (pats atlikimo metodas), tai apačioje yra kitas variantas.
// Kadangi truputį teko pasukti galvą darant šią užduotį, po testo buvo įdomu sužinoti kokių yra dar būdų padaryti tą patį darbą tik kitokiu būdu...
// tas antras variantas yra iš interneto.

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

// ANTRAS VARIANTAS

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");
const initialState = {
  likes: 12,
  dislikes: 2,
  active: null,
};

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case HANDLE_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like",
      };
    case HANDLE_DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1,
      };
    default:
      return state;
  }
};

const Buttons1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          color: active === "like" ? "green" : "black",
          marginRight: "10px",
        }}
        onClick={() =>
          active !== "like" ? dispatch({ type: HANDLE_LIKE }) : null
        }
      >
        <strong>Likes</strong>
        &nbsp;|&nbsp;
        {likes}
      </button>
      <button
        style={{ color: active === "dislike" ? "red" : "black" }}
        onClick={() =>
          active !== "dislike" ? dispatch({ type: HANDLE_DISLIKE }) : null
        }
      >
        <strong>Dislikes</strong>
        &nbsp;|&nbsp;
        {dislikes}
      </button>
    </div>
  );
};

export default Buttons;
