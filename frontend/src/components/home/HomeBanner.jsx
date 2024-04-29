import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/images/Res/banner.webp";
import styles from "../../../static/styles/banner.module.css";

const HomeBanner = () => {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate(`/store`);
  };

  return (
    <Container className={`mt-5`}>
      <Row className="justify-content-center">
        <Col
          xs={10}
          md={10}
          className={`${styles.banner} position-relative p-0 rounded-4`}
          onClick={navigateToProducts}
          style={{ cursor: "pointer" }}
        >
          <Image src={Banner} className="img-fluid w-100 rounded-4" />
          <h1 className="position-absolute w-100 text-center text-white shadow-lg display-1 fw-bold" 
              style={{ top: "50%", transform: "translateY(-50%)" }}>
            Visitar Tienda
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBanner;


