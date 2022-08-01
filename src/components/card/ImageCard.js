import React from "react";
import { Link } from "react-router-dom";

import { Card, Button, Nav } from "react-bootstrap";

const ImageCard = ({ title, image, red }) => {
  return (
    <Card className="imageCard">
      <Card.Img
        src={image}
        className="imageCard"
        style={{ position: "relative" }}
      />
      <div className={red ? "overlay overlayRed" : "overlay"}></div>
      <Card.Body className="absoluteCenter">
        <Card.Title className="text-center" style={{ color: "white" }}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
