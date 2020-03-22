import React, { useState } from "react";

const PromoCodeInput = ({ styles }) => {
  const [promoCode, setPromoCode] = useState("");
  const [isValidCode, updateValidCode] = useState(false);

  const checkCode = code => {
    updateValidCode(!!code);
  };
  return (
    <>
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
    </>
  );
};

export default PromoCodeInput;
