import React from "react";

import { Navbar } from "../../components/Navbar";
import { Footer, AddTodo, VisibleTodoList } from "../../components/Todo";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.todo}>
        <header className={styles.todoHeader}>
          <h1>Todo List</h1>
        </header>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
