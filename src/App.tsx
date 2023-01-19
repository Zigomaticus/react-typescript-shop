import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
// Components
import Product from "./components/Product/Product";
// Model
import { IProduct } from "./models";
// Css
import "./App.css";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
