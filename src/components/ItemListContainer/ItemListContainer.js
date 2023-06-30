const ItemListContainer = (props) => {
  console.log(props);
  return <h1 className="text-center text-2xl">{props.greeting}</h1>;
};

export default ItemListContainer;
