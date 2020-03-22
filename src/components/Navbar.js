import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <nav className={styles.nav}>
    <section>
      <Link to="/home">Home</Link>
      <Link to="/class">Class Packs</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/">Logout</Link>
    </section>
  </nav>
);
