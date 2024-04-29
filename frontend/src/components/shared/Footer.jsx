import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "../../../static/styles/footer.module.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={`${styles.footerBg} text-center mt-0`}>
      <Container className="p-4">
        {/* Fila con iconos de redes sociales */}
        <Row className="mb-4">
          <Col>
            <a href="https://facebook.com">
              <FaFacebook className={`${styles.footerIcons}`} />
            </a>
            <a href="https://youtube.com">
              <FaYoutube className={`${styles.footerIcons}`} />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className={`${styles.footerIcons}`} />
            </a>
            <a href="https://twitter.com">
              <FaXTwitter className={`${styles.footerIcons}`} />
            </a>
          </Col>
        </Row>

        {/* Fila con enlaces de navegación */}
        <Row>
          <Col>
            <Link to="/privacy" className={`${styles.footerLink} me-3`}>
              Privacidad
            </Link>
            <Link to="/contact" className={`${styles.footerLink} me-3`}>
              Contacto
            </Link>
            <Link to="/legal" className={`${styles.footerLink} me-3`}>
              Legal
            </Link>
          </Col>
        </Row>

        {/* Fila con el copyright */}
        <Row className="mt-4">
          <Col>
            <p>&copy; {getCurrentYear()} - The Leaf Way</p>
          </Col>
        </Row>

        {/* Fila de tecnologías usadas */}
        <Row className="mt-2">
          <Col>
            <p>Powered By: React and Django with love ♥</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;
