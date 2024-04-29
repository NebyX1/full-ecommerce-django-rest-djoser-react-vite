import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../hooks/helpers/useLogin"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/context/useAuth"; // Asegúrate de que la ruta sea correcta
import styles from "../../static/styles/forms.module.css";
import Snippet from "../components/shared/Snippet";
import { toast } from "react-hot-toast";
import ResetPasswordModal from "../components/login/ModalRecoverPass";
import { Link } from 'react-router-dom';

// Esquema de validación de Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
    .matches(/\d/, "La contraseña debe contener al menos un número")
    .required("La contraseña es obligatoria"),
});

const Login = () => {
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuth((state) => state.login);
  const { mutate: login, isLoading, isError, error, isSuccess } = useLogin();

 // Funciones para abrir y cerrar el modal
 const handleOpenResetPasswordModal = () => setShowResetPasswordModal(true);
 const handleCloseResetPasswordModal = () => setShowResetPasswordModal(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values, {
        onSuccess: (data) => {
          setAuth(data);
          toast.success("Inicio de sesión exitoso!");
          navigate("/home");
        },
        onError: (error) => {
          toast.error(error.message || "Error al iniciar sesión");
        },
      });
    },
  });

  return (
    <>
      <Snippet pageName="Iniciar Sesión" />

      <Container fluid className={`p-2 ${styles.bgStyle} ${styles.fontComponent}`}>
        <Form
          noValidate
          onSubmit={formik.handleSubmit}
          className={`rounded-4 p-3 bg-white mt-3 mb-3 ${styles.formStyle}`}
        >
          <Container className="shadow-sm p-3 rounded-4">
            <Container className="text-center mb-5">
              <h3>Iniciar Sesión</h3>
            </Container>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresa tu email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`${styles.placeholderFontColor} rounded-4`}
                isInvalid={!!formik.errors.email && formik.touched.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`${styles.placeholderFontColor} rounded-4`}
                isInvalid={!!formik.errors.password && formik.touched.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Container fluid className="d-grid gap-2 mt-4">
              <Button
                className="w-100 btn-block shadow-sm rounded-5"
                variant="outline-success"
                type="submit"
                disabled={formik.isSubmitting}
              >
                <AiOutlinePoweroff className="me-2" /> Iniciar sesión
              </Button>
            </Container>
          </Container>
          <Link to="#" onClick={handleOpenResetPasswordModal}>
                ¿Olvidaste tu contraseña?
            </Link>

            {/* Modal para restablecer la contraseña */}
            <ResetPasswordModal 
                show={showResetPasswordModal} 
                handleClose={handleCloseResetPasswordModal} 
            />
        </Form>
      </Container>
    </>
  );
};

export default Login;
