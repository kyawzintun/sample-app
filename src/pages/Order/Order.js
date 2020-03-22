import React from "react";

import { Navbar } from "../../components/Navbar";
import { calcSubtotal, calcPercentage } from "../../utils";
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
                <h2>You have selected:</h2>
                <div className={`${styles.classInfo} ${styles.mb20}`}>
                  {selectedPack.total_credit === 0 && (
                    <div className={`${styles.count} ${styles.unlimitedClass}`}>
                      &infin;
                    </div>
                  )}

                  {selectedPack.total_credit === 1 && (
                    <div className={`${styles.count} ${styles.singleClass}`}>
                      S
                    </div>
                  )}

                  {selectedPack.total_credit > 1 && (
                    <div
                      className={`${styles.count} ${
                        selectedPack.pack_type === "shareable"
                          ? "shareClass"
                          : ""
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
              </div>
              <div className={styles.divider}></div>
              <div className={`${styles.priceInfo} ${styles.p20}`}>
                <div>
                  <div className={styles.label}>Subtotal</div>
                  <div className={styles.price}>
                    {calcSubtotal(selectedPack.pack_price)}
                  </div>
                </div>
                <div>
                  <div className={styles.label}>GST</div>
                  <div className={styles.price}>
                    {calcPercentage(selectedPack.pack_price)}
                  </div>
                </div>
                {selectedPack.pack_type !== "unlimited" && (
                  <div>
                    <div className={styles.label}>
                      <b>Discount</b>
                    </div>
                    <div className={styles.price}>
                      <b>- $0.00</b>
                    </div>
                  </div>
                )}
                <div className={styles.total}>
                  <div className={styles.label}>Grand Total</div>
                  <div className={styles.price}>{selectedPack.pack_price}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
