import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../static/styles/about.module.css";
import Snippet from "../components/shared/Snippet";

const Privacy = () => {
  return (
    <>
      <Snippet pageName="Privacidad" />

      <Container className={`${styles.legalHeight}`}>
        {/* Header con título de la página de Privacidad */}
        <Row className={`${styles.headerStyle} my-5`}>
          <Col className="text-white">
            <h1 className="display-4 text-center">Política de Privacidad</h1>
            <p className="text-center">Tu seguridad y confianza son nuestra prioridad</p>
          </Col>
        </Row>

        {/* Contenido principal de la página de Privacidad */}
        <Row className="mt-5">
          <Col>
            <h2>Seguridad en las Transacciones</h2>
            <p>
              En "The Leaf Way", tomamos muy en serio la seguridad de tus transacciones. Utilizamos SSL 
              (Secure Socket Layer) para encriptar tus datos durante la transmisión, asegurando que tu 
              información personal y detalles de pago estén protegidos en todo momento. Además, nuestro 
              método de pago a través de Google Pay garantiza una de las plataformas más seguras y confiables 
              en el mercado digital.
            </p>
            <p>
              Google Pay protege tu información financiera con múltiples capas de seguridad, asegurando que 
              los datos de tu tarjeta nunca sean almacenados en nuestro sitio web ni accesibles por terceros. 
              Puedes realizar tus compras con la tranquilidad de que tu privacidad y seguridad están 
              resguardadas.
            </p>

            <h2>Confidencialidad y Uso de Datos</h2>
            <p>
              Valoramos tu privacidad y nos comprometemos a proteger tus datos personales. La información 
              que recopilamos al realizar una compra es utilizada exclusivamente para procesar tu pedido 
              y mejorar tu experiencia en nuestro sitio. No vendemos, alquilamos ni compartimos tus datos 
              personales con terceros para fines comerciales.
            </p>
            <p>
              Nuestra política de privacidad detalla cómo se manejan tus datos, incluyendo la información 
              de contacto y detalles de transacciones. Nos adherimos a las leyes y regulaciones de protección 
              de datos vigentes para garantizar que tu información sea manejada de forma responsable y segura.
            </p>

            <h2>Compromiso con la Privacidad</h2>
            <p>
              En "The Leaf Way", estamos comprometidos con mantener la confianza de nuestros clientes. 
              Si tienes preguntas o inquietudes sobre cómo se manejan tus datos, no dudes en contactarnos. 
              Estamos aquí para asegurarnos de que tu experiencia con nosotros sea segura, confiable y 
              satisfactoria.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Privacy;
