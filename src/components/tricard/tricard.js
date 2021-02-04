import React from "react";
import { connect } from "react-redux";

import { Card, Button } from "react-bootstrap";

import { addItem } from "../../redux/cart/cartActions";

const Tricard = ({ img, title, body, btn, plan, addItem }) => {
  return (
    <Card>
      <Card.Img src={img} className="tricard_img" />
      <Card.Body>
        <Card.Title className="tricard_title text-center">{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="dark" onClick={() => addItem(plan)}>
          {btn}
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: (plan) => dispatch(addItem(plan)),
});

export default connect(null, mapDispatchToProps)(Tricard);
