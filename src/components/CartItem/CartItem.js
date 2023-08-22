import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item, quantity, name, price, id }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded mb-2 shadow">
      <h4 className="font-semibold">{name}</h4>
      <p>Cantidad:{quantity}</p>
      <p>Precio:{price}</p>
      <button
        onClick={() => removeItem(id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2"
      >
        Eliminar
      </button>
    </div>
  );
};

export { CartItem };
