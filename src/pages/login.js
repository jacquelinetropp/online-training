import React from "react";
import LoginUser from "../components/login/loginUser";

import { Row, Col, Image } from "react-bootstrap";
import LoginImg from "../Images/login.jpg";

const Login = () => {
  return (
    <Row className="mx-3 py-3 login">
      <Col md={6} xs={12} className="px-3">
        <Image src={LoginImg} alt="Yoga" className="login_img" />
      </Col>
      <Col md={6} xs={12} className="px-3">
        <LoginUser />
      </Col>
    </Row>
  );
};

export default Login;
