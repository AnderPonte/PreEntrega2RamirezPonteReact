import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addItem = (item, quantity) => {
    if (!isinCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isinCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
