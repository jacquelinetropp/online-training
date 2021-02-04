import React from "react";

import "./cartItem.styles.scss";

const CartItem = ({ plan: { price, sessions, quantity, img } }) => {
  return (
    <div className="cart-item">
      <img src={img} alt="item" />
      <div className="item-details">
        <span className="sessions">{sessions}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
