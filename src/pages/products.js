import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h2>The product page</h2>
      <ul>
        <li>
          <Link to="/products/P1">Produc 1</Link>
        </li>
        <li>
          <Link to="/products/P2">Produc 2</Link>
        </li>
        <li>
          <Link to="/products/P3">Produc 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
