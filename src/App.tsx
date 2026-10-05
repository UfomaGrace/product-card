import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Featured Products</h1>

      <div className="products-grid">
        <ProductCard title="Wireless Headphones" price={79.99} inStock={true} />
        <ProductCard title="Mechanical Keyboard" price={129.5} inStock={true} />
        <ProductCard title="USB-C Hub" price={45} inStock={false} />
      </div>
    </div>
  );
}

export default App;