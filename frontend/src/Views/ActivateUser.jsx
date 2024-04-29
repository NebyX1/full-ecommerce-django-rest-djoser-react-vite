import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useActivateUser } from "../../hooks/helpers/useActivateUser";
import { Container, Alert } from "react-bootstrap";
import styles from "../../static/styles/activate.module.css";
import { FaSmile, FaRegSadCry } from "react-icons/fa";
import { FaFaceGrinStars } from "react-icons/fa6";

const ActivateUser = () => {
  const { uid, token } = useParams();
  const {
    mutate: activateUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useActivateUser();

  useEffect(() => {
    if (uid && token) {
      activateUser({ uid, token });
    }
  }, [uid, token, activateUser]);

  if (isSuccess) {
    return (
      <Container
        fluid
        className={`${styles.bodyHeight} ${styles.centerContent}`}
      >
        <Alert
          variant="success"
          className={`w-50 text-center ${styles.alertHeight} ${styles.centerContent}`}
        >
          Cuenta Activada con pleno éxito! Bienvenido a la familia de The Leaf
          Way! <FaSmile />
        </Alert>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container
        fluid
        className={`${styles.bodyHeight} ${styles.centerContent}`}
      >
        <Alert
          variant="warning"
          className={`w-50 text-center ${styles.alertHeight} ${styles.centerContent}`}
        >
          Error al activar la cuenta:{" "}
          <span className={`${styles.errorColor}`}>
            {error.response?.data?.detail || error.message} <FaRegSadCry />
          </span>
        </Alert>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container
        fluid
        className={`${styles.bodyHeight} ${styles.centerContent}`}
      >
        <Alert
          variant="primary"
          className={`w-50 text-center ${styles.alertHeight} ${styles.centerContent}`}
        >
          Tu cuenta está siendo activada, ten paciencia por favor... <FaSmile />
        </Alert>
      </Container>
    );
  }

  return (      <Container
    fluid
    className={`${styles.bodyHeight} ${styles.centerContent}`}
  >
    <Alert
      variant="secondary"
      className={`w-50 text-center ${styles.alertHeight} ${styles.centerContent}`}
    >
      Estamos preparándonos para activar tu cuenta <FaFaceGrinStars />
    </Alert>
  </Container>);
};

export default ActivateUser;
