import React, { Fragment } from "react";
import { connect } from "react-redux";
import LoginUser from "../components/login/loginUser";

import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";

import { Row, Col, Image } from "react-bootstrap";
import LoginImg from "../Images/login.jpg";

const Checkout = ({ cartItems, total }) => {
  return (
    <Fragment>
      <Row className="mx-3 py-3 cart justify-content-center">
        <Col col-md-offset-1 md={2}>
          <h6>Product</h6>
        </Col>
        <Col md={2}>
          <h6>Description</h6>
        </Col>
        <Col md={2}>
          <h6>Quantity</h6>
        </Col>
        <Col md={2}>
          <h6>Price</h6>
        </Col>
        <Col md={2}>
          <h6>Remove</h6>
        </Col>
      </Row>
      <Row className="px-5">
        <Col md={12} className="cart__total">
          <h2>Total: ${total}</h2>
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
