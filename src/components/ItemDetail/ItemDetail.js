import React from "react";
import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ id, name, img, price, description, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  console.log(quantityAdded);

  return (
    <article className="p-4 ">
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>Precio: ${price}</p>
        <p>Descripción: {description}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link
            to="/Cart"
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2"
          >
            Terminar Compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export { ItemDetail };
