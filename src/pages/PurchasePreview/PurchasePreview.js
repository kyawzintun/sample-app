import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { calcSubtotal, calcPercentage, filterClass } from "../../utils";
import styles from "./PurchasePreview.module.css";

import classJson from "../ClassPack/data.json";

const PurchasePreview = props => {
  const selectedClassId = props.match.params.id;
  const history = useHistory();
  const [selectedPack] = useState(filterClass(classJson, selectedClassId));
  const [promoCode, setPromoCode] = useState("");
  const [isValidCode, updateValidCode] = useState(false);

  const checkCode = code => {
    updateValidCode(!!code);
  };

  const order = pack => {
    localStorage.setItem("selectedPack", JSON.stringify(pack));
    history.push("/order");
  };

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mediumWidth}>
            <h2 className={styles.title}>CLASS PACK PURCHASE PREVIEW</h2>
          </div>
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
                      selectedPack.pack_type === "shareable" ? "shareClass" : ""
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
              {selectedPack.pack_type !== "unlimited" && (
                <div className={styles.promoCodeWrap}>
                  <input
                    type="text"
                    name="promo-code"
                    className={styles.promoCodeInput}
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                  />
                  {isValidCode && promoCode && (
                    <img
                      alt="check circle"
                      src={require("../../assets/check-circle.svg")}
                      className={styles.checkCircle}
                    />
                  )}
                  <button
                    className={styles.applyBtn}
                    onClick={() => checkCode(promoCode)}
                  >
                    APPLY
                  </button>
                </div>
              )}
            </div>
            <div className={styles.divider}></div>
            <div className={`${styles.priceInfo} ${styles.p20}`}>
              <div>
                <div className={styles.label}>Subtotal</div>
                <div className={styles.price}>
                  ${calcSubtotal(selectedPack.pack_price)}
                </div>
              </div>
              <div>
                <div className={styles.label}>GST</div>
                <div className={styles.price}>
                  ${calcPercentage(selectedPack.pack_price)}
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
                <div className={styles.price}> ${selectedPack.pack_price} </div>
              </div>
            </div>
          </div>
          <div className={styles.mb20}>
            Please read all
            <a className={styles.highlight} href="#">
              Terms & Conditions
            </a>
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
    </>
  );
};

export default PurchasePreview;
