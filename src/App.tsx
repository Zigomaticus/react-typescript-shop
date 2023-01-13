import { useEffect, useState } from "react";
import axios from "axios";
// Components
import Product from "./components/Product/Product";
// Model
import { IProduct } from "./models";
// Css
import "./App.css";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products"
    );
    setProducts(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        {loading && <h2>Loading...</h2>}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
