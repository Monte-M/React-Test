import React, { Component } from "react";

import css from "./Card.module.css";

export default class Card extends Component {
  render() {
    return (
      <li className={css.card}>
        <span>
          {this.props.id}. {this.props.title}
        </span>
        <span>Finished: {this.props.completed.toString()}</span>
      </li>
    );
  }
}
