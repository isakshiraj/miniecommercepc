import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useCart();
  const items = Object.values(cart);

  if (!items.length) {
    return <p>Cart is empty</p>;
  }

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <>
      <div className="grid">
        {items.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.title}</h4>

            <p className="meta">Price: ₹{item.price}</p>
            <p className="meta">Category: {item.category}</p>

            <div className="qty-control">
              <button
                onClick={() =>
                  item.qty === 1
                    ? dispatch({ type: "REMOVE", id: item.id })
                    : dispatch({
                        type: "UPDATE",
                        id: item.id,
                        qty: item.qty - 1
                      })
                }
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                disabled={item.qty >= item.stock}
                onClick={() =>
                  dispatch({
                    type: "UPDATE",
                    id: item.id,
                    qty: item.qty + 1
                  })
                }
              >
                +
              </button>
            </div>

            <button
              style={{ marginTop: "12px", backgroundColor: "#dc2626" }}
              onClick={() => dispatch({ type: "REMOVE", id: item.id })}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        Total Items: {totalItems} <br />
        Total Price: ₹{totalPrice.toFixed(2)}
      </div>
    </>
  );
}
