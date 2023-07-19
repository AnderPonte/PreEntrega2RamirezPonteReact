import { Item } from "../Item/Item";

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export { ItemList };
