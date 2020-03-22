import React from "react";

import { Navbar } from "../../components/Navbar";
import { SelectedClass, TotalPrice } from "../../components/Class";
import styles from "../PurchasePreview/PurchasePreview.module.css";

const Order = () => {
  const selectedPack = JSON.parse(localStorage.getItem("selectedPack"));

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mediumWidth}>
            <h2 className={styles.title}>THANK YOU!</h2>
            <h2 className={styles.title}>
              YOU HAVE SUCCESSFULLY PURCHASED A CLASS PACK!
            </h2>
          </div>
          {selectedPack.pack_id && (
            <div
              className={`${styles.card} ${styles.mediumWidth} ${styles.mb20}`}
            >
              <div className={styles.p20}>
                <SelectedClass styles={styles} selectedPack={selectedPack} />
              </div>
              <div className={styles.divider}></div>
              <TotalPrice styles={styles} selectedPack={selectedPack} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
