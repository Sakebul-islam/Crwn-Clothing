import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <div className="product-card-container-image">
        <img src={imageUrl} alt={`${name}`} />
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
    </div>
  );
};

export default ProductCard;
