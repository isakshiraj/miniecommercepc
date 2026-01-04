import { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <CartProvider>
      <Header goTo={setPage} />

      {page === "home" && <Home goTo={setPage} />}
      {page === "products" && <Products />}
      {page === "cart" && <CartPage />}

      <Footer />
    </CartProvider>
  );
}
