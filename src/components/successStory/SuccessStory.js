import React from 'react';
import { Row, Col, Image } from "react-bootstrap";

const SuccessStory = ({quote, image}) => {
  return (
   
    <Row className="highlight pt-5 justify-content-center">
      <Col md={4} className="align-self-center">
        <h3 className="text-light text-right ">{quote}</h3>    
      </Col>
      <Col md={4}  className= "pl-5">
        <Image src={image} className="highlight__img" />
      </Col>
    </Row>
  )
}

export default SuccessStory;