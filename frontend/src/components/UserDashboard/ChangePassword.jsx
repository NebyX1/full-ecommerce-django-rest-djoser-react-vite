import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useChangePassword } from "../../../hooks/helpers/useChangePassword"; // Asegúrate de que la ruta sea correcta
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/context/useAuth";

const ChangePassword = () => {
  const logout = useAuth((state) => state.logout);
  const {
    mutate: changePassword,
    isSuccess,
    isError,
    error,
  } = useChangePassword();

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      reNewPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(
        "El campo de contraseña actual es obligatorio."
      ),
      newPassword: Yup.string()
        .min(6, "La nueva contraseña debe tener al menos 6 caracteres.")
        .required("El campo de nueva contraseña es obligatorio."),
      reNewPassword: Yup.string()
        .oneOf(
          [Yup.ref("newPassword"), null],
          "Las contraseñas deben coincidir."
        )
        .required("Debes confirmar la nueva contraseña."),
    }),
    onSubmit: (values) => {
      changePassword(
        {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
          reNewPassword: values.reNewPassword,
        },
        {
          onSuccess: () => {
            toast.success("Contraseña cambiada con éxito");
            formik.resetForm();
            logout();
          },
          onError: (error) => {
            toast.error("Error al cambiar la contraseña" || error.message);
          },
        }
      );
    },
  });

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h4>Cambiar Contraseña</h4>
          <Form noValidate onSubmit={formik.handleSubmit}>
            {/* Contraseña Actual */}
            <Form.Group className="mb-3" controlId="currentPassword">
              <Form.Label>Contraseña Actual</Form.Label>
              <Form.Control
                type="password"
                name="currentPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentPassword}
                isInvalid={
                  formik.touched.currentPassword &&
                  !!formik.errors.currentPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.currentPassword}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Nueva Contraseña */}
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                isInvalid={
                  formik.touched.newPassword && !!formik.errors.newPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.newPassword}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Confirmar Nueva Contraseña */}
            <Form.Group className="mb-3" controlId="reNewPassword">
              <Form.Label>Confirmar Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="reNewPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reNewPassword}
                isInvalid={
                  formik.touched.reNewPassword && !!formik.errors.reNewPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.reNewPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="btn-block shadow-sm rounded-5"
              variant="outline-success"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Cambiar Contraseña
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
