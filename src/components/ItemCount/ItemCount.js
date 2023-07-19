import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row ">
          <button className="Button" onClick={decrement}>
            -
          </button>
          <h4 className="Number">{quantity}</h4>
          <button className="Button" onClick={increment}>
            +
          </button>
        </div>
        <div>
          <button
            className="bg-lime-200 shadow-lg"
            onClick={() => onAdd(quantity)}
            disabled={!stock}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export { ItemCount };
