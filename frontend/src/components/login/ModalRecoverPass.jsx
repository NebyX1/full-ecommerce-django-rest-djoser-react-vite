import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useResetPassword } from "../../../hooks/helpers/useResetPassword";
import { toast } from "react-hot-toast";

const ResetPasswordModal = ({ show, handleClose }) => {
  const {
    mutate: resetPassword,
    isSuccess,
    isError,
    error,
  } = useResetPassword();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es obligatorio"),
    }),
    onSubmit: (values) => {
      resetPassword(values.email, {
        onSuccess: () => {
          toast.success(
            "Revisa tu correo electrónico para continuar con el proceso de cambio de contraseña."
          );
        },
        onError: () => {
          toast.error(
            error.message || "Error al intentar restablecer la contraseña"
          );
        },
      });
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Recuperar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="outline-success"
            className="mt-3 mb-3 w-100 btn-block shadow-sm rounded-5"
            type="submit"
          >
            Recuperar Contraseña
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPasswordModal;
