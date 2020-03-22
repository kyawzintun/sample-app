import React, { useState } from "react";

import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Todo/Footer";
import AddTodo from "../../components/Todo/AddTodo";
import VisibleTodoList from "../../components/Todo/VisibleTodoList";
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
