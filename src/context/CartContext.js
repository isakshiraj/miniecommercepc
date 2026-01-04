
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const item = state[action.product.id];
      if (item && item.qty >= action.product.stock) return state;
      return { ...state,
        [action.product.id]: { ...action.product, qty: item ? item.qty + 1 : 1 }
      };
    }
    case "REMOVE": {
      const copy = { ...state };
      delete copy[action.id];
      return copy;
    }
    case "UPDATE":
      return { ...state,
        [action.id]: { ...state[action.id], qty: action.qty }
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, {});
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
