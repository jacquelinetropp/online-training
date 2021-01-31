import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const Info = ({ image, title, text, left }) => {
  return (
    <div className="info">
      {left ? (
        <Row className="padding-x-md">
          {" "}
          <Col md={6} xs={12} className="info_image">
            <Image src={image} alt="image" />
          </Col>
          <Col md={6} xs={12} className="info_text vertical-align text-center">
            <h3>{title}</h3>
            <p>{text}</p>
          </Col>
        </Row>
      ) : (
        <Row className="padding-x-md">
          {" "}
          <Col md={6, {order: 1}} xs={{span: 12, order: 2}} className="info_text vertical-align text-center">
            <h3>{title}</h3>
            <p>{text}</p>
          </Col>
          <Col md={6, {order: 2}} xs={{span: 12, order: 1}} className="info_image">
            <Image src={image} alt="image"/>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Info;
