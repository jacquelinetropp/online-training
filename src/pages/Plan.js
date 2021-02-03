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

const Plan = ({ getPlans, plans, loading }) => {
  useEffect(() => {
    getPlans();
  }, []);
  console.log(plans);
  let content;
  if (!plans || loading) {
    content = <p>Loading</p>;
  } else {
    content = plans.map((plan) => (
      <Col md={4} xs={12} className="py-3">
        <Tricard
          key={plan.id}
          title={`Sessions ${plan.sessions}`}
          body={`$ ${plan.price}`}
          img={Barbell}
          btn="Add To Cart"
        />
      </Col>
    ));
  }
  return (
    <Container fluid className="wrapper">
      <Row>
        <Col>
          <Image src={PlanImg} fluid className="px-0 home_img" />
        </Col>
      </Row>
      <Row className="mx-auto my-3">{content}</Row>
    </Container>
  );
};

const mapStateToProps = ({ shop }) => ({
  plans: shop.items,
  loading: shop.loading,
});

const mapDispatchToProps = {
  getPlans: actions.getPlans,
};

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
