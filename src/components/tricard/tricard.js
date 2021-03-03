import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Card, Button, Nav } from "react-bootstrap";

import { addItem } from "../../redux/cart/cartActions";

const Tricard = ({ img, title, body, btn, plan, addItem, currentUser }) => {
  return (
    <Card>
      <div className="tricard_img_box">
        <Card.Img src={img} className="tricard_img" />
      </div>
      <Card.Body>
        <Card.Title className="tricard_title text-center">{title}</Card.Title>
        <Card.Text className="tricard__txt">{body}</Card.Text>
        {currentUser ? (
          <Button
            className="addToCart"
            variant="dark"
            onClick={() => addItem(plan)}
          >
            {btn}
          </Button>
        ) : (
          <div className="btn_link text-center">
            <Link to="/login">
              <Button variant="outline-danger">Login To Add To Cart</Button>
            </Link>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (plan) => dispatch(addItem(plan)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tricard);
