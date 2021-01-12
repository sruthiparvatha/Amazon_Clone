import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  //   var sum = 0;
  //   for (var i = 0; i < basket.length; i++) {
  //     sum += basket[i].price;
  //   }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework  */}
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(basket)} /* Part of the homework*/
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      ></CurrencyFormat>

      <button className="subtotal__btn">Proceed to CheckOut</button>
    </div>
  );
}

export default Subtotal;
