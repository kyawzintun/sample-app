import React from "react";

import { Navbar } from "../../components/Navbar";
import styles from "./AboutUs.module.css";

const AboutUs = () => (
  <>
    <Navbar />
    <div className={styles.main}>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quod iste
        vero aut ipsam molestiae eius ducimus explicabo praesentium perspiciatis
        in commodi eligendi minus animi, eum tempore. Dolorum, illo assumenda.
      </p>
    </div>
  </>
);

export default AboutUs;
