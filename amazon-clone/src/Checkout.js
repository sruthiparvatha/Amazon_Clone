import react from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-disney%2B.jpg?so0uQt68ZOFb5FN0rSzSWtfGinew87_K&itok=kJxsCgPs"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <h3>Hello, {user?.email}</h3>
        <strong> </strong>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}

        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
