import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useGetPurchases } from "../../../hooks/helpers/useGetPurchases";
import { useWriteReview } from "../../../hooks/helpers/useWriteReview";
import { useUpdatePurchase } from "../../../hooks/helpers/useUptadatePurchase";
import { toast } from "react-hot-toast";

const Reviews = () => {
  const { data: purchases } = useGetPurchases();
  const { mutate: writeReview } = useWriteReview();
  const { mutate: updatePurchase } = useUpdatePurchase();
  const [recentPurchases, setRecentPurchases] = useState([]);

  useEffect(() => {
    if (purchases) {
      const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
      const recent = purchases.filter((purchase) => {
        const purchaseDate = new Date(purchase.date_purchased);
        // Aquí se agrega la condición de que 'reviewed' sea falso
        return purchaseDate >= fifteenDaysAgo && !purchase.reviewed;
      });
      setRecentPurchases(recent);
    }
  }, [purchases]);
  const validationSchema = Yup.object({
    purchaseId: Yup.string().required("Debes seleccionar una compra."),
    rating: Yup.string().required("La puntuación es obligatoria."),
    comment: Yup.string().required("El comentario no puede estar vacío."),
  });

  const formik = useFormik({
    initialValues: {
      purchaseId: "",
      rating: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Encontrar la compra seleccionada
      const selectedPurchase = recentPurchases.find(
        (p) => p.id.toString() === values.purchaseId
      );

      if (selectedPurchase) {
        const reviewData = {
          user: selectedPurchase.user,
          items: selectedPurchase.items,
          stars: parseInt(values.rating),
          comment: values.comment,
        };

        writeReview(reviewData, {
          onSuccess: () => {
            // Actualizar la compra para marcarla como revisada
            updatePurchase({
              purchaseId: values.purchaseId,
              updateData: { reviewed: true },
            });

            toast.success("Review añadido con éxito.");
            resetForm();
            window.location.href = "/user-dashboard";
          },
          onError: (error) => {
            toast.error(error.message || "Error al añadir el review");
          },
        });
      } else {
        toast.error("Error: compra seleccionada no encontrada.");
      }
    },
  });

  if (recentPurchases.length === 0) {
    return (
      <Container>
        <Alert variant="secondary">
          No tienes compras en los últimos 15 días para añadir reviews.
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h4>
            Aquí podrás añadir una puntuación a los productos que has comprado
          </h4>
          <Form noValidate onSubmit={formik.handleSubmit}>
            {/* Select Purchase */}
            <Form.Group className="mb-3" controlId="purchaseId">
              <Form.Label>Selecciona una Compra</Form.Label>
              <Form.Control
                as="select"
                name="purchaseId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purchaseId}
                isInvalid={
                  formik.touched.purchaseId && !!formik.errors.purchaseId
                }
              >
                <option value="">Selecciona una opción</option>
                {recentPurchases.map((purchase) => (
                  <option key={purchase.id} value={purchase.id}>
                    {purchase.items.map((item) => item.name).join(", ")}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formik.errors.purchaseId}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Rating Select */}
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>
                ¿En cuántos puntos calificarías este producto?
              </Form.Label>
              <Form.Select
                name="rating"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
                isInvalid={!!formik.errors.rating && formik.touched.rating}
              >
                <option value="">Selecciona una puntuación</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.rating}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Comment Input */}
            <Form.Group className="mb-3" controlId="comment">
              <Form.Label>Déjanos tu Comentario</Form.Label>
              <Form.Control
                type="text"
                name="comment"
                placeholder="Comentario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.comment}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button
              className="btn-block shadow-sm rounded-5"
              variant="outline-success"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Añadir Review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
