import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import Tricard from "../components/tricard/tricard";
import Info from "../components/info/Info";

//images
import HomeImg from "../Images/home.jpg";
import Barbell from "../Images/barbell-outline.svg";
import Food from "../Images/fast-food-outline.svg";
import Desktop from "../Images/desktop-outline.svg";

export class Home extends Component {
  render() {
    return (
      <Container fluid className="wrapper">
        <Row className="header">
          <Col>
            <div className="header__img">
              <Image src={HomeImg} fluid className="px-0 home_img clippath" />
            </div>
            <div className="header__text">
              <div className="header__1">
               
              </div>
              <div className="header__2">
                <div className="header__box">
                 <div className="text-center">
                  <h1 className="header__header">FuncMove</h1>
                  <h4 className="header__description">No More Pain</h4>
                </div>
                  <h6>Our Mission</h6>
                  <p>Society sit more than we should which leads to musculo-skeletal imbalances that cause back pain and other daily aches and pains.
                  You don't need to succumb to this cycle of pain. We are dedicated to helping you move better and feel better using movement our 
                  body was designed to do. </p> 
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="my-3 ">
          <div className="padding-y-lg  margin-top-xl">
            <Info
              image={Barbell}
              title="Customized Workouts"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis."
              btn="Learn More"
            />
          </div>
          <div className="padding-y-lg clippath1 background-1 margin-top-lg">
            <Info
              left
              image={Food}
              title="Personalized Diet Guidelines"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis."
              btn="Learn More"
            />
          </div>
          <div className="padding-top-lg margin-top-lg">
            <Info
              image={Desktop}
              title="One on One Coaching"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis."
              btn="Learn More"
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
