import React, { Fragment } from "react";
import LoginUser from "../components/login/loginUser";

import { Row, Col, Image } from "react-bootstrap";
import LoginImg from "../Images/login.jpg";

const Cart = () => {
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
          <h2>Total: $100</h2>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Cart;
