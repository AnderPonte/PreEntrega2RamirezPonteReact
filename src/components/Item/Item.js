import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, description }) => {
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
        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2">
          <Link to={`/item/${id}`}>Ver detalle</Link>
        </button>
      </footer>
    </article>
  );
};

export { Item };
