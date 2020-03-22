import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

import styles from "./Todo.module.css";

const AddTodo = ({ dispatch }) => {
  let input;

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className={styles.todoForm}>
        <input ref={node => (input = node)} placeholder="Add to do" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
