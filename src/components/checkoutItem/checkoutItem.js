import React from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";

const CheckoutItem = ({ clearItem, cartItem, addItem, removeItem }) => {
  const { sessions, img, price, quantity } = cartItem;
  return (
    <Row className="d-flex mx-3 py-3 cart justify-content-center align-items-center checkout">
      <Col col-md-offset-1 md={2}>
        <Image src={img} className="checkout__img" />
      </Col>
      <Col md={2}>
        <h6>{sessions} sessions</h6>
      </Col>
      <Col md={2} className="checkout__quantity justify-content-center">
        <div className="checkout__arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span>
          <h6 className="value">{quantity} </h6>
        </span>
        <div className="checkout__arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </Col>
      <Col md={2}>
        <h6>{price}</h6>
      </Col>
      <Col md={2}>
        <Button variant="danger-outline" onClick={() => clearItem(cartItem)}>
          &#10005;
        </Button>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
