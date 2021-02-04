import React from "react";
import { connect } from "react-redux";
import CartItem from "../cartItem/cartItem";
import { Button } from "react-bootstrap";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} plan={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="btn_checkout">
      <Link to="/checkout">
        <Button variant="danger">
          <p>Go To Checkout</p>
        </Button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
