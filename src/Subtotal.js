import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* :TODO part of homework */}
              Subtotal ({basket.length} items):{" "}
              <strong>
                $ {basket.reduce((acc, item) => acc + item.price, 0)}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contians a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
