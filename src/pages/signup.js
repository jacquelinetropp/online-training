import React from "react";
import SignupUser from "../components/signup/signupUser";

import { Row, Col, Image } from "react-bootstrap";
import SignupImg from "../Images/signup.jpg";

const Signup = () => {
  return (
    <Row className="mx-3 py-3 signup">
      <Col md={6} xs={12} className="px-3">
        <Image src={SignupImg} alt="Yoga" className="signup_img" />
      </Col>
      <Col md={6} xs={12} className="px-3">
        <SignupUser />
      </Col>
    </Row>
  );
};

export default Signup;
