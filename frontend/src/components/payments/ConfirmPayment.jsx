import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import Snippet from "../shared/Snippet";

const ConfirmPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Establece un temporizador para redirigir al usuario a la página de inicio después de 3 segundos
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Limpieza del temporizador en el desmontaje del componente
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Snippet pageName="Pago Exitoso" />

      <Container className="mt-5 mb-5" style={{ minHeight: "75vh" }}>
        <Alert variant="success">
          <Alert.Heading>Tu pago fue exitoso!</Alert.Heading>
          <p>
            Gracias por confiar en nosotros. Tu pedido está siendo procesado.
          </p>
        </Alert>
      </Container>
    </>
  );
};

export default ConfirmPayment;
