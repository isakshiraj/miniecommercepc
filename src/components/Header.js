
export default function Header({ goTo }) {
  return (
    <div className="header">
      <h2>EcommerceP&C</h2>
      <div>
        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("products")}>Products</button>
        <button onClick={() => goTo("cart")}>Cart</button>
      </div>
    </div>
  );
}
