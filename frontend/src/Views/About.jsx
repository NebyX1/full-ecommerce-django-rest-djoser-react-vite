import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../static/styles/about.module.css";
import Snippet from "../components/shared/Snippet";

const About = () => {
  return (
    <>
      <Snippet pageName="Sobre Nosotros" />

      <Container className={`${styles.aboutHeight}`}>
        {/* Header con título y eslogan */}
        <Row className={`${styles.headerStyle} my-5`}>
          <Col className="text-white">
            <h1 className="display-4 text-center">The Leaf Way</h1>
            <p className="text-center">Abraza la sabiduría de la naturaleza</p>
          </Col>
        </Row>

        {/* Contenido principal de la página */}
        <Row className="mt-5">
          <Col>
            <h2>Nuestra Historia</h2>
            <p>
              The Leaf Way no es solo una marca; es una filosofía de crecimiento
              personal y bienestar natural. Nos centramos en el despertar de la conciencia humana,
              recordando a cada persona que, además de ser cuerpo y mente, somos también espíritu.
              Creemos en el poder de la naturaleza para sanar, inspirar y transformar.
            </p>
            <p>
              Nuestra selección cuidadosamente curada de plantas y gemas naturales son más que
              objetos; son compañeros en tu viaje hacia la iluminación espiritual y el equilibrio energético.
              Cada planta y piedra que ofrecemos ha sido seleccionada por sus propiedades y energías únicas,
              asegurando que puedas encontrar la combinación perfecta para tus necesidades.
            </p>

            <h2>Misión</h2>
            <p>
              Nuestra misión es empoderar a las personas en su camino hacia el crecimiento personal y el 
              bienestar integral, ofreciendo productos que sirvan como puentes hacia una mayor conciencia 
              y armonía con el universo. Nos esforzamos por ser una guía en el despertar espiritual y la 
              búsqueda de un equilibrio más profundo en la vida de nuestros clientes.
            </p>

            <h2>Visión</h2>
            <p>
              En The Leaf Way, visualizamos un mundo donde cada individuo reconozca y honre su conexión 
              espiritual con la naturaleza. Nuestra visión es ser un faro de conocimiento y sabiduría 
              ancestral, contribuyendo al despertar de una conciencia colectiva más consciente y conectada.
            </p>

            <h2>Valores</h2>
            <p>
              Nos regimos por valores de respeto, integridad y autenticidad. Creemos en el respeto hacia 
              todas las formas de vida, la integridad en nuestras acciones y productos, y la autenticidad 
              en nuestro compromiso de servir a nuestros clientes y al planeta. Nuestra esencia es ser 
              un refugio de paz y serenidad para aquellos que buscan una vida más alineada con su verdadero ser.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
