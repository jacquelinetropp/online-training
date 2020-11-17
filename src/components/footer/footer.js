import React from "react";

import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Row className="mx-auto py-2 px-2 footer">
      <Col md={4} xs={12} className="px-2">
        <p className="footer_p text-center text-md-left ">Disclaimer</p>
      </Col>
      <Col md={4} xs={12} className="px-2">
        <p className="text-center footer_p">Personal Training</p>
      </Col>
      <Col md={4} xs={12} className="px-2">
        <p className="text-center text-md-right footer_p">
          © Jacqueline Tropp | 2020
        </p>
      </Col>
    </Row>
  );
}
