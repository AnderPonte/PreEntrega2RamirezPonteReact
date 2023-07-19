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
        <button className="bg-lime-200 shadow-lg">
          <Link to={`/item/${id}`}>Ver detalle</Link>
        </button>
      </footer>
    </article>
  );
};

export { Item };
