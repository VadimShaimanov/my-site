import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.name}`}
      className="card"
      style={{ backgroundImage: `url(${product.img})` }}
    >
      <div className="cardOverlay"></div>
      <div className="cardContent">
        <h3>{product.name}</h3>
        <p>{product.type}</p>
      </div>
    </Link>
  );
}
