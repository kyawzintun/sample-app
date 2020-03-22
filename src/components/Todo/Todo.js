import React from "react";
import styles from "./Todo.module.css";
import checkStyle from "./Checkbox.module.css";

const Todo = ({ toggleTodo, deleteTodo, completed, text, index }) => (
  <div className={styles.todoItem}>
    <div className={`${completed ? styles.disableTxt : ""}`}>
      <span style={{ marginRight: "15px" }}>{index + 1} .</span>
      <span>{text}</span>
    </div>
    <div className={styles.childWrap}>
      <label className={checkStyle.container}>
        <input type="checkbox" checked={completed} onChange={toggleTodo} />
        <span className={checkStyle.checkmark}></span>
      </label>
      <div>
        <img
          onClick={deleteTodo}
          className={styles.deleteBtn}
          alt="delete todo"
          src={require("../../assets/delete.svg")}
        />
      </div>
    </div>
  </div>
);

export default Todo;
