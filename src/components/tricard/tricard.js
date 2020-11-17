import React from "react";
import { Card, Button } from "react-bootstrap";

const Tricard = ({ img, title, body, btn }) => {
  return (
    <Card>
      <Card.Img src={img} className="tricard_img" />
      <Card.Body>
        <Card.Title className="tricard_title text-center">{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="dark">{btn}</Button>
      </Card.Body>
    </Card>
  );
};

export default Tricard;
