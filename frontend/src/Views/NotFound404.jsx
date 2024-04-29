import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Snippet from "../components/shared/Snippet";

const NotFound404 = () => {
  return (
    <>
      <Snippet pageName="404" />

      <Container
        className="text-center"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <h1 className="display-1">404</h1>
            <h2>OPPS! PÁGINA NO ENCONTRADA</h2>
            <p>
              Lo sentimos, la página que buscas no existe o ha tenido un
              problema al cargarse.
            </p>
            <p>
              Puedes volver a la página principal haciendo click en el botón de
              abajo
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/" className="btn btn-primary rounded-5 btn-lg px-4">
                <FaHome className="me-2" /> Volver al inicio
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound404;
