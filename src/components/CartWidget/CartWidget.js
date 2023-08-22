import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link
      to="/Cart"
      style={{ display: totalQuantity > 0 ? "flex" : "none" }}
      className="flex items-center  text-white"
    >
      <FaShoppingCart />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
