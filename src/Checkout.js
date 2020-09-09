import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg"
          alt="partners"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* Basket items */}
        </div>
      </div>
      <div className="checkout__rigth">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
