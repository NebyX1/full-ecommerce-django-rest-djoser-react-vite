import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLeaf, FaUserCircle, FaShoppingCart, FaStar } from 'react-icons/fa';
import styles from '../../../static/styles/welcomedashboard.module.css';


const LandingDashboard = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className={`text-center ${styles.welcomeCard}`}>
            <Card.Header className={styles.welcomeHeader}>
              <FaLeaf size="3em" className={styles.leafIcon} /> Bienvenido a Tu Espacio
            </Card.Header>
            <Card.Body>
              <Card.Title className="mb-4">Explora y Gestiona tu Cuenta</Card.Title>
              <Card.Text>
                Aquí podrás revisar tus compras, actualizar tus datos, revisar tus reviews y mucho más.
              </Card.Text>
              <Row className="mt-4">
                <Col>
                  <FaUserCircle size="2em" />
                  <p>Perfil</p>
                </Col>
                <Col>
                  <FaShoppingCart size="2em" />
                  <p>Compras</p>
                </Col>
                <Col>
                  <FaStar size="2em" />
                  <p>Reviews</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingDashboard