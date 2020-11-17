import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import PlanImg from "../Images/plan.jpg";

class Plan extends Component {
  render() {
    return (
      <Container fluid className="wrapper">
        <Row>
          <Col>
            <Image src={PlanImg} fluid className="px-0 home_img" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plan;
