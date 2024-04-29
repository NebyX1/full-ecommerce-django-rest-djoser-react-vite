import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../static/styles/about.module.css";
import Snippet from "../components/shared/Snippet";

const Legal = () => {
  return (
    <>
      <Snippet pageName="Legal" />

      <Container className={`${styles.legalHeight}`}>
        {/* Header con título de la página Legal */}
        <Row className={`${styles.headerStyle} my-5`}>
          <Col className="text-white">
            <h1 className="display-4 text-center">Información Legal</h1>
            <p className="text-center">Entendiendo Nuestras Limitaciones y Responsabilidades</p>
          </Col>
        </Row>

        {/* Contenido principal de la página Legal */}
        <Row className="mt-5">
          <Col>
            <h2>Advertencia sobre las Propiedades Medicinales</h2>
            <p>
              En "The Leaf Way", ofrecemos una gama de plantas y gemas que han sido seleccionadas
              basándonos en conocimientos de medicina y espiritualidad popular ancestral. Si bien
              existen estudios científicos que respaldan ciertas propiedades medicinales de estas
              plantas, es importante destacar que no todos los estudios son concluyentes.
            </p>
            <p>
              Los productos vendidos en nuestro sitio no deben ser utilizados como sustitutos de
              medicamentos regulados por las autoridades de salud pública. La responsabilidad del
              uso de nuestras plantas y gemas recae en cada individuo, y no nos hacemos responsables
              por el mal uso o las expectativas no cumplidas en relación a estos productos.
            </p>
            <h2>Consejo Médico y Responsabilidad Personal</h2>
            <p>
              Aconsejamos encarecidamente no sustituir el consejo, diagnóstico o tratamiento
              médico por el uso de nuestros productos. Siempre consulte a un profesional de la salud
              calificado para cualquier pregunta relacionada con una condición médica o tratamiento.
            </p>
            <p>
              La decisión de utilizar nuestras plantas y gemas para calmar o curar dolencias es una
              elección personal y debe tomarse con plena conciencia de que los resultados pueden
              variar. Cada persona es única y las reacciones a los productos naturales pueden
              diferir de un individuo a otro.
            </p>
            <h2>Uso Espiritual de Nuestros Productos</h2>
            <p>
              En "The Leaf Way", entendemos que el camino hacia el bienestar y la armonía incluye no solo 
              el cuerpo y la mente, sino también el espíritu. Nuestros productos están diseñados para 
              servir como complementos en la búsqueda de la espiritualidad y el equilibrio interior. 
              Ofrecemos una variedad de plantas y gemas que, según las tradiciones ancestrales, pueden 
              ayudar a mejorar la espiritualidad y proporcionar apoyo ante diferentes problemáticas de 
              carácter espiritual.
            </p>
            <p>
              Sin embargo, es crucial entender que estos productos no pretenden bajo ningún motivo sustituir 
              a la ciencia y la medicina alopática. Su uso es de carácter espiritual y complementario, y 
              deben ser empleados como parte de un enfoque holístico hacia el bienestar, siempre respetando 
              y reconociendo la importancia y el lugar de la medicina y las ciencias de la salud convencionales.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Legal;
