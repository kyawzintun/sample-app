import React from "react";
import { Navbar } from "../../components/Navbar";
import { Class } from "../../components/Class";
import styles from "./ClassPack.module.css";

import classJson from "./data.json";

const ClassPack = () => {
  const classList = classJson.data.pack_list.map(classItem => (
    <Class key={classItem.pack_id} classItem={classItem} />
  ));
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <ul className={styles.cards}>{classList}</ul>
      </div>
    </>
  );
};

export default ClassPack;
