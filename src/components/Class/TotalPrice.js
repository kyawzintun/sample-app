import React from "react";
import { calcSubtotal, calcPercentage } from "../../utils";

const TotalPrice = ({ styles, selectedPack }) => (
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
      <div className={styles.price}>${selectedPack.pack_price}</div>
    </div>
  </div>
);

export default TotalPrice;
