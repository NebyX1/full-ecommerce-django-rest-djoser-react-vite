import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useUpdateUserProfile } from '../../../hooks/helpers/useUpdateUserProfile';
import { useGetProfile } from '../../../hooks/helpers/useGetProfile';
import { toast } from 'react-hot-toast';

const UserData = () => {
  const { data: userProfileData } = useGetProfile();
  const { mutate: updateUserProfile } = useUpdateUserProfile();
  const [confirmChange, setConfirmChange] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      gender: '',
      location: '',
      avatar: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio.'),
      last_name: Yup.string().required('El apellido es obligatorio.'),
      gender: Yup.string().required('El genero es obligatorio.'),
      location: Yup.string().required('El departamento es obligatorio.'),
      avatar: Yup.string().url('Debe ser una URL válida.').required('Debes ingresar una imagen.'),
    }),
    onSubmit: (values) => {
      if (confirmChange) {
        updateUserProfile(values, {
          onSuccess: () => {
            toast.success('Datos actualizados con éxito.');
            window.location.href = "/user-dashboard";
          },
          onError: (error) => {
            toast.error(error.message || 'Error al actualizar los datos.');
          },
        });
      }
    },
  });

  useEffect(() => {
    if (userProfileData) {
      formik.setValues({
        name: userProfileData.name || '',
        last_name: userProfileData.last_name || '',
        gender: userProfileData.gender || '',
        location: userProfileData.location || '',
        avatar: userProfileData.avatar || '',
      });
    }
  }, [userProfileData]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Datos del Usuario</h2>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Confirmo que quiero modificar mis datos"
              onChange={() => setConfirmChange(!confirmChange)}
            />
          </Form.Group>

          {confirmChange && (
            <>
              <Alert variant="warning">
                Estás a punto de modificar tus datos. Por favor, confirma tu información antes de continuar.
              </Alert>
              <Form noValidate onSubmit={formik.handleSubmit}>
                {/* Nombre */}
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Nombre" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    isInvalid={formik.touched.name && formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {/* Apellido */}
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="last_name"
                    placeholder="Apellido" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    isInvalid={formik.touched.last_name && formik.errors.last_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.last_name}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {/* Género */}
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Género</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}
                    isInvalid={formik.touched.gender && formik.errors.gender}
                  >
                    <option value="">Selecciona tu género</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.gender}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Ubicación */}
                <Form.Group className="mb-3" controlId="formBasicLocation">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Control
                    as="select"
                    name="location"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                    isInvalid={formik.touched.location && formik.errors.location}
                  >
                    <option value="">Selecciona tu género</option>
                    <option value="AR">Artigas</option>
                    <option value="CA">Canelones</option>
                    <option value="CL">Cerro Largo</option>
                    <option value="CO">Colonia</option>
                    <option value="DU">Durazno</option>
                    <option value="FS">Flores</option>
                    <option value="FD">Florida</option>
                    <option value="LA">Lavalleja</option>
                    <option value="MA">Maldonado</option>
                    <option value="MO">Montevideo</option>
                    <option value="PA">Paysandú</option>
                    <option value="RN">Río Negro</option>
                    <option value="RV">Rivera</option>
                    <option value="RO">Rocha</option>
                    <option value="SA">Salto</option>
                    <option value="SJ">San José</option>
                    <option value="SO">Soriano</option>
                    <option value="TA">Tacuarembó</option>
                    <option value="TT">Treinta y Tres</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.location}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Avatar */}
                <Form.Group className="mb-3" controlId="formBasicAvatar">
                  <Form.Label>Avatar (URL)</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="avatar"
                    placeholder="URL del avatar" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.avatar}
                    isInvalid={formik.touched.avatar && formik.errors.avatar}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.avatar}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Botón de envío */}
                <Button
                  className="btn-block shadow-sm rounded-5"
                  variant="outline-success"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Modificar
                </Button>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserData;
