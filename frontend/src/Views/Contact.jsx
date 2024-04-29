import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../static/styles/about.module.css";
import Snippet from "../components/shared/Snippet";

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
  };

  return (
    <>
      <Snippet pageName="Contacto" />

      <Container className={`${styles.legalHeight}`}>
        {/* Header con título de la página de Contacto */}
        <Row className={`${styles.headerStyle} my-5`}>
          <Col className="text-white">
            <h1 className="display-4 text-center">Contacto</h1>
            <p className="text-center">Estamos aquí para ayudarte</p>
          </Col>
        </Row>

        {/* Contenido principal de la página de Contacto */}
        <Row className="mt-5">
          <Col md={6}>
            <h2>Ubicación</h2>
            <p>123 Calle Ficticia, Ciudad Imaginaria, País de Ensueño</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.3287259774339!2d-55.22738755034773!3d-34.367910202040115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950aba2a1b273863%3A0x4c7c3f53374eb660!2sAvda.%20Jos%C3%A9%20Pedro%20Varela%201160%2C%2030000%20Minas%2C%20Departamento%20de%20Lavalleja!5e0!3m2!1ses-419!2suy!4v1704195421094!5m2!1ses-419!2suy"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col md={6}>
            <h2>Formulario de Contacto</h2>
            <Form onSubmit={handleSend}>
              <Form.Group className="mb-3" controlId="contactForm.Name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactForm.Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactForm.Subject">
                <Form.Label>Motivo de Contacto</Form.Label>
                <Form.Control type="text" placeholder="Motivo de contacto" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactForm.Comment">
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Deja tu comentario"
                />
              </Form.Group>

              <Button
                className="btn-block shadow-sm rounded-5"
                variant="outline-success"
                type="button"
              >
                Modificar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
