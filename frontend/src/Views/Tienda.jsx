import React, { useState } from "react";
import { useFetchProducts } from "../../hooks/helpers/useFetchProducts";
import ProductCard from "../components/products/ProductCard";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Snippet from "../components/shared/Snippet";
import ReactPaginate from 'react-paginate';
import styles from "../../static/styles/tienda.module.css";

const Tienda = () => {
  const { data: products, isLoading, isError, error } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;

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

  // Verifica si products está definido antes de calcular pageCount y currentProducts
  const pageCount = products ? Math.ceil(products.length / productsPerPage) : 0;
  const offset = currentPage * productsPerPage;
  const currentProducts = products ? products.slice(offset, offset + productsPerPage) : [];

  return (
    <>
      <Snippet pageName="Tienda" />
      <Container className="text-center mt-5">
        <h1>Listado de Productos</h1>
        <Row className="justify-content-center">
          {currentProducts.map((product) => (
            <Col key={product.id} xs={12} sm={12} md={6} lg={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        {products && products.length > 0 && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={'...'}
            pageCount={pageCount}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={`pagination justify-content-center ${styles.paginationContainer}`}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={styles.activePage} />
        )}
      </Container>
    </>
  );
};

export default Tienda;
