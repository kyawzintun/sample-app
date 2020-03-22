import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <nav className={styles.nav}>
    <section>
      <Link to="/home">Home</Link>
      <Link to="/about-us">About Us</Link>
    </section>
  </nav>
);
