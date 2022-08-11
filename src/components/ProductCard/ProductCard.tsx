import { FC } from "react";
import styles from "./ProductCard.module.css";
import { ProductCardFooter } from "./ProductCardFooter/ProductCardFooter";
import { ProductCardBody } from './ProductCardBody.tsx/ProductCardBody';

const ProductCard: FC = () => {
  return (
    <div className={styles['product__card']}>
      <div className={styles['product__card-header']} />
      <ProductCardBody />
      <ProductCardFooter />
    </div>
  );
};

export default ProductCard;
