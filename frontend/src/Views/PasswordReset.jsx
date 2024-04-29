import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useResetPasswordConfirm } from "../../hooks/helpers/useRestPasswordConfirm";
import { toast } from "react-hot-toast";
import Snippet from "../components/shared/Snippet";
import styles from "../../static/styles/forms.module.css";
import { useNavigate } from "react-router-dom";


const PasswordReset = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const { mutate: resetPasswordConfirm } = useResetPasswordConfirm();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      reNewPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Campo obligatorio"),
      reNewPassword: Yup.string()
        .oneOf(
          [Yup.ref("newPassword"), null],
          "Las contraseñas deben coincidir"
        )
        .required("Campo obligatorio"),
    }),
    onSubmit: (values) => {
      resetPasswordConfirm(
        {
          uid,
          token,
          new_password: values.newPassword,
          re_new_password: values.reNewPassword,
        },
        {
          onSuccess: () => {
            toast.success("Contraseña restablecida con éxito.");
            navigate("/login");
          },
          onError: (error) => {
            toast.error(error.message || "Error al restablecer la contraseña");
          },
        }
      );
    },
  });

  return (
    <>
      <Snippet pageName="Cambiar password" />
      <Container fluid className={`${styles.bgStyle} ${styles.fontComponent}`}>
        <Form
          onSubmit={formik.handleSubmit}
          className={`rounded-4 p-3 bg-white ${styles.formStyle}`}
        >
          <Container className="shadow-sm p-3 rounded-4">
            <Form.Group>
              <Form.Label>Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                onChange={formik.handleChange}
                className={`${styles.placeholderFontColor} rounded-4`}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                isInvalid={
                  formik.touched.newPassword && formik.errors.newPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.newPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Confirmar Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="reNewPassword"
                onChange={formik.handleChange}
                className={`${styles.placeholderFontColor} rounded-4`}
                onBlur={formik.handleBlur}
                value={formik.values.reNewPassword}
                isInvalid={
                  formik.touched.reNewPassword && formik.errors.reNewPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.reNewPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="w-100 btn-block shadow-sm rounded-5 mt-3"
              variant="outline-success"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Restablecer Contraseña
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
};

export default PasswordReset;
