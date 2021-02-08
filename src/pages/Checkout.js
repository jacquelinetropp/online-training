import React, { Fragment } from "react";
import { connect } from "react-redux";
import CheckoutItem from "../components/checkoutItem/checkoutItem";
import StripeButton from "../components/stripeButton/stripeButton";

import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";

import { Row, Col, Image } from "react-bootstrap";

const Checkout = ({ cartItems, total }) => {
  return (
    <Fragment>
      <Row className="text-center row-fix">
        <Col xs={12}>
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Row className="mx-3 py-3 cart justify-content-center">
        <Col col-md-offset-1 md={2}>
          <h4>Product</h4>
        </Col>
        <Col md={2}>
          <h4>Description</h4>
        </Col>
        <Col md={2}>
          <h4>Quantity</h4>
        </Col>
        <Col md={2}>
          <h4>Price</h4>
        </Col>
        <Col md={2}>
          <h4>Remove</h4>
        </Col>
      </Row>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItems.id} cartItem={cartItem} />
      ))}
      <Row className="px-5 row-fix">
        <Col xs={12} className="cart__total">
          <h2>Total: ${total}</h2>
        </Col>
      </Row>
      <Row className="row-fix">
        <Col xs={12} className="justify-content-center text-center">
          <div className="cart__warning text-danger">
            *Please use the following test credit card as payment*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
          </div>
          <StripeButton price={total} />
        </Col>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Checkout);
