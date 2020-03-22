import React from "react";

const SelectedClass = ({ styles, selectedPack }) => (
  <>
    <h2>You have selected:</h2>
    <div className={`${styles.classInfo} ${styles.mb20}`}>
      {selectedPack.total_credit === 0 && (
        <div className={`${styles.count} ${styles.unlimitedClass}`}>
          &infin;
        </div>
      )}

      {selectedPack.total_credit === 1 && (
        <div className={`${styles.count} ${styles.singleClass}`}>S</div>
      )}

      {selectedPack.total_credit > 1 && (
        <div
          className={`${styles.count} ${
            selectedPack.pack_type === "shareable" ? styles.shareClass : ""
          }`}
        >
          {selectedPack.total_credit}
        </div>
      )}
      <div className={styles.pack}>
        <p>{selectedPack.pack_name}</p>
        <p>{selectedPack.newbie_note}</p>
      </div>
      <div className={styles.price}>
        <div>${selectedPack.pack_price}</div>
        {selectedPack.total_credit === 0 && (
          <div className={styles.perMonth}>per month</div>
        )}
      </div>
    </div>
  </>
);

export default SelectedClass;
