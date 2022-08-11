import { CounterEnum, useCount } from "hooks/useCount/useCount";
import ProductImage from "assets/product.jpg";
import styles from "./ProductCardBody.module.css"


export const ProductCardBody = () => {
  const { count, handleCount } = useCount();
  return (
    <div className={styles['product__card-body']}>
      <img
        src={ProductImage}
        alt="product"
        className={styles['product__image']}
      />
      <h3 className={styles['product__title']}>Amisa</h3>
      <h2 className={styles['product__description']}>
        Organic Spelt Crispy Spelt Flakes
      </h2>

      <div className={styles['product__price-weight']}>
        <p className={styles['product__weight']}>250g</p>
        <div className={styles['product__price']}>£2.99</div>
      </div>

      <div className={styles['product__cta']}>
        <div className={styles['update__count']}>
          <button 
            disabled={count === 0} 
            onClick={() => handleCount(CounterEnum.DECREMENT)}
          >-</button>
          <p className={styles['product__count']}>{count}</p>
          <button
            disabled={count === 10} 
            onClick={() => handleCount(CounterEnum.INCREMENT)}
          >+</button>
        </div>
        <button className={styles['update__cart-btn']}>Update Cart</button>
      </div>
      
      <ul className={styles['delivery__details']}>
        <li>
          <p className={styles['delivery__details-title']}>Delivered in:</p>
          <p className={styles['delivery__details-content']}>2 days</p>
        </li>
        <li>
          <p className={styles['delivery__details-title']}>Next day delivery:</p>
          <p className={styles['delivery__details-content']}>order by 2:00pm</p>
        </li>
        <li>
          <p className={styles['delivery__details-title']}>Delivery by:</p>
          <p className={styles['delivery__details-content']}>Stove</p>
        </li>
      </ul>
    </div>
  )
}
