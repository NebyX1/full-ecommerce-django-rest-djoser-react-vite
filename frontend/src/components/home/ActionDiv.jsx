import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Thing1 from "../../assets/images/Res/Thing1.jpg";
import Thing2 from "../../assets/images/Res/Thing2.webp";

const ActionDiv = () => {
  const navigate = useNavigate(); // Crear instancia de useNavigate

  // Funciones para manejar clics en los botones
  const handleNavigateToGems = () => {
    navigate("/gems");
  };

  const handleNavigateToPlants = () => {
    navigate("/plants");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        {/* Primer artículo */}
        <Col md={5} className="d-flex border px-0 rounded-4 shadow-sm me-2">
          <Col md={6} className="d-flex flex-column justify-content-center px-2">
            <p>Conoce más:</p>
            <h5>Nuestras Gemas</h5>
            <Button
              className="btn-block shadow-sm rounded-5"
              variant="outline-success"
              type="button"
              onClick={handleNavigateToGems} // Agregar manejador de clic
            >
              Ver más
            </Button>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center p-0">
            <Image src={Thing1} className="img-fluid h-100 rounded-4" />
          </Col>
        </Col>

        {/* Segundo artículo */}
        <Col md={5} className="d-flex border px-0 ms-md-2 rounded-4 shadow-sm mt-2 mt-md-0 ms-md-2">
          <Col md={6} className="d-flex flex-column justify-content-center px-2">
            <p>Conoce más:</p>
            <h5>Nuestras Plantas</h5>
            <Button
              className="btn-block shadow-sm rounded-5"
              variant="outline-success"
              type="button"
              onClick={handleNavigateToPlants}
            >
              Ver más
            </Button>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center p-0">
            <Image src={Thing2} className="img-fluid h-100 rounded-4" />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ActionDiv;

