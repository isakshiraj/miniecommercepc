import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

function getInitialCart() {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return {};
  }
}


function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const item = state[action.product.id];
      if (item && item.qty >= action.product.stock) return state;

      return {
        ...state,
        [action.product.id]: {
          ...action.product,
          qty: item ? item.qty + 1 : 1
        }
      };
    }

    case "UPDATE":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          qty: action.qty
        }
      };

    case "REMOVE": {
      const copy = { ...state };
      delete copy[action.id];
      return copy;
    }

    default:
      return state;
  }
}

/* ---------- PROVIDER ---------- */
export function CartProvider({ children }) {
  // ✅ Lazy initialization from localStorage
  const [cart, dispatch] = useReducer(reducer, {}, getInitialCart);

  // ✅ Persist cart on every change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
