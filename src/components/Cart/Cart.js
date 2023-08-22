import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, quantity, precio, totalQuantity, total } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/">Productos</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="text-xl font-semibold mt-4">Total: ${total}</h3>
      <button
        onClick={() => clearCart()}
        className="bg-blue-500  text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        Limpiar carrito
      </button>
      <Link
        to="/checkout"
        className="bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-600"
      >
        CheckOut
      </Link>
    </div>
  );
};

export { Cart };
