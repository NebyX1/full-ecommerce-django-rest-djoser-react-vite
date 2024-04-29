// components/DeactivateAccount.jsx
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDeleteAccount } from "../../../hooks/helpers/useDeleteAccount";
import useAuth from "../../../hooks/context/useAuth";
import {
  Container,
  Alert,
  Form,
  FormGroup,
  FormControl,
  FormCheck,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { toast } from "react-hot-toast";

const DeactivateAccount = () => {
  const logout = useAuth((state) => state.logout);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const {
    mutate: performDelete,
    isError,
    error,
    isSuccess,
  } = useDeleteAccount();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required(
        "Se requiere la contraseña para continuar."
      ),
    }),
    onSubmit: (values) => {
      if (confirmDelete && values.password) {
        performDelete(values.password, {
          onSuccess: () => {
            toast.success("Cuenta eliminada con éxito.");
            logout();
          },
          onError: (error) => {
            toast.error(error.message || "Error al eliminar la cuenta.");
          },
        });
      }
    },
  });

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h4>Desactivar Cuenta</h4>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup className="mb-3">
              <FormCheck
                type="checkbox"
                label="Estoy seguro de que quiero borrar mi cuenta"
                onChange={() => setConfirmDelete(!confirmDelete)}
              />
            </FormGroup>

            {confirmDelete && (
              <>
                <Alert variant="danger">
                  Estás a punto de borrar tu cuenta, si la eliminas todos tus
                  datos se perderán y no habrá forma de recuperarlos, perderás
                  todo el historial de compras. ¿Estás seguro de que quieres
                  proceder?
                </Alert>

                <FormGroup className="mb-3">
                  <FormControl
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <FormControl.Feedback type="invalid">
                    {formik.errors.password}
                  </FormControl.Feedback>
                </FormGroup>

                <Button variant="outline-danger rounded-5" type="submit">
                  Borrar Cuenta
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DeactivateAccount;
