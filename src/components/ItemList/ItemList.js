import { Item } from "../Item/Item";
import { getProducts } from "../../asyncMock";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export { ItemList };
