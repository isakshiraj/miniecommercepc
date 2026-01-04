import { memo } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cart, dispatch } = useCart();

  if (!product) return null;

  const cartItem = cart[product.id];

  return (
    <div className="card">
      <h4>{product.title}</h4>

      <p className="meta">Price: ₹{product.price}</p>
      <p className="meta">Category: {product.category}</p>
      <p className="meta">
        Status: {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      {!cartItem ? (
        <button
          disabled={product.stock === 0}
          onClick={() => dispatch({ type: "ADD", product })}
        >
          Add to Cart
        </button>
      ) : (
        <div className="qty-control">
          <button
            onClick={() =>
              cartItem.qty === 1
                ? dispatch({ type: "REMOVE", id: product.id })
                : dispatch({
                    type: "UPDATE",
                    id: product.id,
                    qty: cartItem.qty - 1
                  })
            }
          >
            -
          </button>

          <span>{cartItem.qty}</span>

          <button
            disabled={cartItem.qty >= product.stock}
            onClick={() =>
              dispatch({
                type: "UPDATE",
                id: product.id,
                qty: cartItem.qty + 1
              })
            }
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(ProductCard);
