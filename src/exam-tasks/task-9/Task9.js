import React, { Component } from "react";
import Card from "./Card";

import css from "./Task9.module.css";

export default class Task9 extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ todos: data.slice(0, 5) });
      });
  }
  render() {
    return (
      <div className="container">
        <ol className={css.list}>
          <h3>Todo List</h3>
          {this.state.todos.map(({ title, id, completed }) => (
            <Card
              key={id}
              id={id}
              title={title}
              completed={completed ? "Yes" : "No"}
            />
          ))}
        </ol>
        <h3>Task 9</h3>
      </div>
    );
  }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlika (yes/no)
*/
