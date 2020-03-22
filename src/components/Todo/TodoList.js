import React from "react";
import Todo from "./Todo";

import styles from "./Todo.module.css";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (!todos.length) return false;
  console.log(todos);
  return (
    <div className={styles.todoListWrapper}>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            {...todo}
            index={index}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
