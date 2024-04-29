import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const GemAndPlantProperties = ({gemsandplant}) => {
  return (
    <Row className="mt-5">
      <Col md={9}>
        <h3>{gemsandplant.title}</h3>
        <p>{gemsandplant.description}</p>
      </Col>
      <Col md={3}>
        <Image src={gemsandplant.image} roundedCircle height={"150px"} width={"150px"} />
      </Col>
    </Row>
  );
};

export default GemAndPlantProperties;
