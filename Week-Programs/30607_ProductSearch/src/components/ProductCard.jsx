import React from "react";

function ProductCard({ product, onRemove }) {
  return (
    <li>
      {product.name} - ₹{product.price}

      <button
        onClick={() => onRemove(product.id)}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </li>
  );
}

export default React.memo(ProductCard);