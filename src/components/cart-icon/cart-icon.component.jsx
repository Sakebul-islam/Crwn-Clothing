import { useContext, useEffect, useState } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const [countClassName, setCountClassName] = useState("item-count");

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (cartCount > 0) {
      setCountClassName("item-count active");
      const timer = setTimeout(() => {
        setCountClassName("item-count");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className={countClassName}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
