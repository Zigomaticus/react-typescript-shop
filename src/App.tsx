import { useState } from "react";
// Components
import Product from "./components/Product/Product";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import Modal from "./components/Modal/Modal";
import CreateProduct from "./components/CreateProduct/CreateProduct";
// hooks
import { useProducts } from "./hooks/products";
// model
import { IProduct } from "./models";
// Css
import "./App.css";

const App = () => {
  const { products, error, loading, addProduct } = useProducts();

  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {modal && (
          <Modal title="Create new product">
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
        {loading && <Loader />}
        {error && <Error error={error} />}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
