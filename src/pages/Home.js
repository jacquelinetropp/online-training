import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import Tricard from "../components/tricard/tricard";
import Info from "../components/info/Info";
import ImageCard from "../components/card/ImageCard";
import SuccessStory from "../components/successStory/SuccessStory";

//images
import Barbell from "../Images/barbell-outline.svg";
import Food from "../Images/fast-food-outline.svg";
import Desktop from "../Images/desktop-outline.svg";
import Diet from "../Images/diet.jpg";
import Workout from "../Images/workouts.jpg";
import Coaching from "../Images/coaching.jpg";
import Client from "../Images/client.png";
import Trainers from "../Images/trainers.jpg";
import Started from "../Images/started.jpg";
import AboutUs from "../Images/home.jpg";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <Container fluid className="wrapper">
        <Row>
          <Col className="header">
            <div className="header__text">
              <div className="header__box">
                <h2 className="header__header text-center">
                  Functional Movement Done Right
                </h2>
              </div>
            </div>
            <div className="header__mission">
              <div className="header__mission__text">
                <h3 className="text-center">Our Mission</h3>
                <p>
                  Society sit more than we should which leads to
                  musculo-skeletal imbalances that cause back pain and other
                  daily aches and pains. You don't need to succumb to this cycle
                  of pain. We are dedicated to helping you move better and feel
                  better using movement our body was designed to do.{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <h3 className="text-center text-uppercase">Why Pick Us? </h3>
          </Col>
        </Row>

        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={3} className="p-2">
            <ImageCard title="CUSTOM MEAL PLANS" image={Diet} />
          </Col>
          <Col xs={12} md={3} className="p-2">
            <ImageCard title="CUSTOM WORKOUTS" image={Workout} />
          </Col>
          <Col xs={12} md={3} className="p-2">
            <ImageCard title="ONE ON ONE" image={Coaching} />
          </Col>
        </Row>
        <SuccessStory
          quote='"After 3 months of consistent workouts, my pain level has significantly decreased. I never thought I would feel this good at my age!"'
          image={Client}
        />

        <Row className="pt-5 bg-info">
          <Col>
            <h3 className="text-center text-uppercase text-white pb-4">
              we care about you!
            </h3>
          </Col>
        </Row>
        <Row className="pb-5 justify-content-center bg-info">
          <Col sm={12} md={3} className="p-2">
            <Link to="/">
              <ImageCard title="GETTING STARTED" image={Started} red />
            </Link>
          </Col>

          <Col sm={12} md={3} className="p-2">
            <Link to="/">
              <ImageCard title="OUR TRAINERS" image={Trainers} red />
            </Link>
          </Col>

          <Col sm={12} md={3} className="p-2">
            <Link to="/">
              <ImageCard title="ABOUT US" image={AboutUs} red />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
