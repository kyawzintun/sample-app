import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import {
  SelectedClass,
  PromoCodeInput,
  TotalPrice
} from "../../components/Class";
import { filterClass } from "../../utils";
import styles from "./PurchasePreview.module.css";

import classJson from "../ClassPack/data.json";

const PurchasePreview = props => {
  const selectedClassId = props.match.params.id;
  const history = useHistory();
  const [selectedPack] = useState(filterClass(classJson, selectedClassId));

  const order = pack => {
    localStorage.setItem("selectedPack", JSON.stringify(pack));
    history.push("/order");
  };

  return (
    <>
      <Navbar />
      {selectedPack && (
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.mediumWidth}>
              <h2 className={styles.title}>CLASS PACK PURCHASE PREVIEW</h2>
            </div>
            <div
              className={`${styles.card} ${styles.mediumWidth} ${styles.mb20}`}
            >
              <div className={styles.p20}>
                <SelectedClass styles={styles} selectedPack={selectedPack} />

                {selectedPack.pack_type !== "unlimited" && (
                  <PromoCodeInput styles={styles} />
                )}
              </div>
              <div className={styles.divider}></div>
              <TotalPrice styles={styles} selectedPack={selectedPack} />
            </div>
            <div className={styles.mb20}>
              Please read all
              <Link className={styles.highlight} to="/class">
                Terms & Conditions
              </Link>
              before pruchasing your YM Class or Class Pack
            </div>
            <div className={`${styles.btnWrap} ${styles.mediumWidth}`}>
              <Link to="/class" className={styles.backBtn}>
                <img
                  alt="back button"
                  src={require("../../assets/back-btn.png")}
                />
                Back
              </Link>
              <button
                className={styles.payBtn}
                onClick={() => order(selectedPack)}
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchasePreview;
