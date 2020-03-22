import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Class.module.css";

const Class = ({ classItem }) => {
  const history = useHistory();

  const goToPreviewPage = props => history.push(`/preview/${props.pack_id}`);

  return (
    <li className={styles.cardsItem}>
      <div className={styles.card}>
        <div className={styles.cardHead}>
          {classItem.tag_name && (
            <div className={styles.tagName}> {classItem.tag_name} </div>
          )}
          <div className={styles.triangle}>
            <span className={styles.option}>
              <img
                alt={classItem.tag_name}
                className={styles.classImg}
                src={require("../../assets/jump.jpg")}
              />
            </span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <h2 className={`${styles.cardTitle} ${styles.mb20}`}>
            {classItem.pack_name}
          </h2>
          {classItem.total_credit === 0 && (
            <div
              className={`${styles.count} ${styles.mb20} ${styles.unlimitedClass}`}
            >
              &infin;
            </div>
          )}
          {classItem.total_credit === 1 && (
            <div
              className={`${styles.count} ${styles.mb20} ${styles.singleClass}`}
            >
              S
            </div>
          )}
          {classItem.total_credit > 1 && (
            <div
              className={`${styles.count} ${styles.mb20} ${
                classItem.pack_type === "shareable" ? styles.shareClass : ""
              }`}
            >
              {classItem.total_credit}
            </div>
          )}

          <div
            className={styles.cardInfo}
            onClick={() => goToPreviewPage(classItem)}
          >
            <div className={`${styles.cardText} ${styles.mb20}`}>
              <div className={`${styles.classDesc} ${styles.mb40}`}>
                <p>Take your class at any YM studio!</p>
                <p>Choose from 350 weekly classes</p>
                <p>7 days booking window</p>
              </div>
              <div className={styles.totalPrice}>${classItem.pack_price}</div>
              {classItem.total_credit === 0 && (
                <div className={styles.estimatePrice}>per month</div>
              )}
              {classItem.total_credit > 1 && (
                <div className={styles.estimatePrice}>
                  ${classItem.estimate_price} per class
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Class;
