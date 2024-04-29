import React from "react";
import { useFetchProducts } from "../../../hooks/helpers/useFetchProducts";
import ProductCard from "../../components/products/ProductCard";
import { Container, Row, Spinner, Alert, Col } from "react-bootstrap";
import styles from "../../../static/styles/home.module.css";

const OffertProducts = () => {
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

  // Filtrar productos que están en oferta
  const productsOnOffer = products.filter((product) => product.offer === true);

  return (
    <Container className={`text-center mt-5 ${styles.fontHeader}`}>
      <Container className={`${styles.fontHeader}`}>
        <h1>Productos en Oferta</h1>
      </Container>
      <Row className="justify-content-center">
        {productsOnOffer.map((product) => (
          <Col
            key={product.id}
            xs={10}
            md={6}
            lg={3}
            className="d-flex justify-content-center mb-4 p-4"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffertProducts;
