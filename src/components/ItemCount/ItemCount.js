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
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer"
            onClick={decrement}
          >
            -
          </button>
          <h4 className="  text-center w-8 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default   text-gray-700 ">
            {quantity}
          </h4>
          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer"
            onClick={increment}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2"
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
