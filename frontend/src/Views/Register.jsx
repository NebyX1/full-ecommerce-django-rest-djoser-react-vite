import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../static/styles/forms.module.css";
import { useRegister } from "../../hooks/helpers/useRegisterUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Snippet from "../components/shared/Snippet";
import { RiEmotionHappyLine } from "react-icons/ri";


const Register = () => {
  const navigate = useNavigate();
  const { mutate: registerUser, isLoading } = useRegister();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      re_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("La dirección de email no es válida")
        .required("El email es obligatorio"),
      username: Yup.string().required("El nombre de usuario es obligatorio"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
        .matches(/\d/, "La contraseña debe contener al menos un número")
        .required("La contraseña es obligatoria"),
      re_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("La confirmación de contraseña es obligatoria"),
    }),
    onSubmit: (values) => {
      console.log("Datos enviados al servidor:", values);
      registerUser(values, {
        onSuccess: (data) => {
          formik.resetForm();
          toast.success("Usuario registrado con éxito");
          navigate("/login");
        },
        onError: (error) => {
          formik.resetForm();
          toast.error(error.message);
        },
      });
    },
  });

  return (
    <>
      <Snippet pageName="Crear Cuenta" />

      <Container fluid className={`${styles.bgStyle} ${styles.fontComponent}`}>
        <Form
          onSubmit={formik.handleSubmit}
          className={`rounded-4 p-3 bg-white ${styles.formStyle}`}
        >
          <Container className="shadow-sm p-3 rounded-4">
            <Container className="text-center mb-5">
              <h3>Crear Cuenta</h3>
            </Container>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`${styles.placeholderFontColor} rounded-4`}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Nombre de Usuario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className={`${styles.placeholderFontColor} rounded-4`}
                isInvalid={formik.touched.username && formik.errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`${styles.placeholderFontColor} rounded-4`}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="re_password">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="re_password"
                placeholder="Confirmar Contraseña"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.re_password}
                className={`${styles.placeholderFontColor} rounded-4`}
                isInvalid={
                  formik.touched.re_password && formik.errors.re_password
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.re_password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="w-100 btn-block shadow-sm rounded-5"
              variant="outline-success"
              type="submit"
              disabled={formik.isSubmitting || isLoading}
            >
              <RiEmotionHappyLine className="me-2" />
              {isLoading ? "Registrando..." : "Registrarse"}
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
};

export default Register;
