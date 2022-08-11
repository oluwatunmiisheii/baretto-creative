import { useState, FC } from "react";
import { ABOUT_PRODUCT } from "utils/constants";
import { truncate } from "utils";
import styles from "./ProductCardFooter.module.css"

export const ProductCardFooter: FC = () => {
  const [showAllText, setShowAllText] = useState<boolean>(false);

  const toggleText = () => {
    setShowAllText(!showAllText);
  };

  return (
    <div className={styles['about__product']}>
      <h3 className="">About the Product</h3>
      <p className={styles['about__product-content']}>
        {showAllText ? ABOUT_PRODUCT : truncate(ABOUT_PRODUCT, 140)}
      </p>
      <button onClick={toggleText} className={styles['more__about-product']}>
        <p> {showAllText ? "Read less" : "Read more"}</p>
        <p> {showAllText ? "- " : "+"}</p>
      </button>
    </div>
  );
};
