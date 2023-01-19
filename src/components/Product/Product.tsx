import { useState } from "react";
// Model
import styles from "./Product.module.css";
// Css
import { IProduct } from "../../models";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [visibleDescription, setVisibleDescription] = useState(false);

  return (
    <div className={styles.product}>
      <img src={product.image} alt="Item" width={200} height={200} />
      <p>{product.title}</p>
      <p>
        <b>{product.price}</b>
      </p>
      {}
      <button
        className={
          visibleDescription ? styles.buttonDescYellow : styles.buttonDescGreen
        }
        onClick={() => setVisibleDescription((prev) => !prev)}
      >
        {visibleDescription ? "Hide details" : "Show details"}
      </button>
      {visibleDescription && <p>{product.description}</p>}
    </div>
  );
};

export default Product;
