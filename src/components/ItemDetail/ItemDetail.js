import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, price, description }) => {
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
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad Agrega", quantity)}
        />
      </footer>
    </article>
  );
};

export { ItemDetail };
