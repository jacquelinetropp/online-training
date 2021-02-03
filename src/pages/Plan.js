import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

import Tricard from "../components/tricard/tricard";

//images
import PlanImg from "../Images/plan.jpg";
import Barbell from "../Images/barbell-outline.svg";
import Food from "../Images/fast-food-outline.svg";
import Desktop from "../Images/desktop-outline.svg";

const Plan = ({ getPlans, plans }) => {
  useEffect(() => {
    getPlans();
  }, []);
  console.log(plans);
  return (
    <Container fluid className="wrapper">
      <Row>
        <Col>
          <Image src={PlanImg} fluid className="px-0 home_img" />
        </Col>
      </Row>
      <Row className="mx-auto my-3">
        <Col md={4} xs={12} className="py-3">
          <Tricard
            img={Barbell}
            title="Customized Workouts"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis."
            btn="Add To Cart"
            id="1"
          />
        </Col>
        <Col md={4} xs={12} className="py-3">
          <Tricard
            img={Food}
            title="Personalized Diet Guidelines"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis."
            btn="Add To Cart"
            id="2"
          />
        </Col>
        <Col md={4} xs={12} className="py-3">
          <Tricard
            img={Desktop}
            title="One on One Coaching"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis."
            btn="Add To Cart"
            id="3"
          />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ shop }) => ({
  plans: shop.plans,
  loading: shop.loading,
});

const mapDispatchToProps = {
  getPlans: actions.getPlans,
};

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
