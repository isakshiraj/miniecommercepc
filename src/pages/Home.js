
export default function Home({ goTo }) {
  return (
    <div className="center">
      <h1>Welcome to EcommerceP&C</h1>
      <p>Your one stop shop</p>

      <div className="btn-group">
        <button onClick={() => goTo("products")}>Product</button>
        <button onClick={() => goTo("cart")}>Cart</button>
      </div>

      
    </div>
  );
}
