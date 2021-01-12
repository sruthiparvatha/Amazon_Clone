import React from "react";
import image1 from "./images/lean_startup.jpg";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket ", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer

    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>₹ {price}</strong>
        </p>

        <div className="product__ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image}></img>

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
