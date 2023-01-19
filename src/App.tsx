// Components
import Product from "./components/Product/Product";
// hooks
import { useProducts } from "./hooks/products";
// Css
import "./App.css";

const App = () => {
  const { products, error, loading } = useProducts();

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
