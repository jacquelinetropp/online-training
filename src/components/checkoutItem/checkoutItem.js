import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const CheckoutItem = () => {
  return (
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
  );
};

export default CheckoutItem;
