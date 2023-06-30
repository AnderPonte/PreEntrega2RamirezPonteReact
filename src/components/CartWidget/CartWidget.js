import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="flex flex-row">
      <FaShoppingCart />
      <span>6</span>
    </div>
  );
};

export default CartWidget;
