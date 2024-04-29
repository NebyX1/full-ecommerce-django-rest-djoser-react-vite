import React from "react";
import { useFetchProducts } from "../../../hooks/helpers/useFetchProducts";
import ProductCard from "../../components/products/ProductCard";
import { Container, Row, Spinner, Alert, Col } from "react-bootstrap";
import styles from "../../../static/styles/home.module.css";

const NewProducts = () => {
  const { data: products, isLoading, isError, error } = useFetchProducts();

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando productos...</span>
        </Spinner>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">
          Error al cargar los productos: {error.message}
        </Alert>
      </Container>
    );
  }

  // Ordenar productos por fecha de agregado o actualización, de más reciente a más antiguo
  const sortedProducts = products.sort(
    (a, b) => new Date(b.date_added) - new Date(a.date_added)
  );

  // Tomar solo los primeros cuatro productos después de ordenar
  const recentProducts = sortedProducts.slice(0, 4);

  return (
    <Container className="text-center mt-5">
      <Container className={`${styles.fontHeader}`}>
        <h1>Productos más recientes</h1>
      </Container>
      <Row className="justify-content-center">
        {recentProducts.map((product) => (
          <Col
            key={product.id}
            xs={10}
            md={6}
            lg={3}
            className="d-flex justify-content-center p-4"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewProducts;
