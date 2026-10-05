type ProductCardProps = {
  title: string;
  price: number;
  inStock: boolean;
};

function ProductCard({ title, price, inStock }: ProductCardProps) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p className="product-price">₦{price.toLocaleString()}</p>
      <span className={`stock-badge ${inStock ? "in-stock" : "out-of-stock"}`}>
        {inStock ? "In stock" : "Out of stock"}
      </span>
    </div>
  );
}

export default ProductCard;