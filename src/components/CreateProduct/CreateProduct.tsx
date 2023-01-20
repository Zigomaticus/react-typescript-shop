import axios from "axios";
import { useState } from "react";
// Error
import Error from "../Error/Error";
// models
import { IProduct } from "../../models";
// Css
import styles from "./CreateProduct.module.css";

const productData: IProduct = {
  title: "www",
  price: 14.2,
  description: "loren ipsum",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  category: "electronic",
  rating: { rate: 3.9, count: 120 },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid tatle");
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        onChange={changeHandler}
        className={styles.input}
        type="text"
        placeholder="Enter product title"
      />
      {error && <Error error={error} />}
      <button type="submit" className={styles.button}>
        Create product
      </button>
    </form>
  );
};

export default CreateProduct;
