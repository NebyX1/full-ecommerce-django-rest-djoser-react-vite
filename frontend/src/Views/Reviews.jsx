import React, { useState } from "react";
import { useGetReviews } from "../../hooks/helpers/useGetReviews";
import { Card, Alert, Container, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Snippet from "../components/shared/Snippet";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "../../static/styles/reviews.module.css";

const Reviews = () => {
  const { data: reviews, isLoading, isError } = useGetReviews();
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 8;

  if (isLoading) return <div>Cargando reviews...</div>;
  if (isError || !reviews)
    return <Alert variant="danger">Error al cargar las reviews.</Alert>;

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <Container className={`${styles.bodyHeight} p-3`}>
      <Snippet pageName="Reviews" />
      <h1 className="text-center mb-5">Nuestras Reviews</h1> {/* Centrado */}
      {currentReviews.length === 0 ? (
        <Alert variant="info">
          No hay reviews disponibles en este momento.
        </Alert>
      ) : (
        <Row className="justify-content-center mb-5">
          {currentReviews.map((review) => (
            <Col key={review.id} xs={12} md={6} className="mb-3">
              <Card className={`${styles.reviewCard} shadow`}>
                <Card.Body>
                  <Card.Title>{review.username}</Card.Title>
                  <div>
                    {Array.from({ length: 5 }, (_, index) =>
                      index < review.stars ? (
                        <FaStar className={styles.starColor} key={index} />
                      ) : (
                        <FaRegStar key={index} />
                      )
                    )}
                  </div>
                  <Card.Text>
                    <strong>Compra:</strong>{" "}
                    {review.items.map((item) => item.name).join(", ")}
                  </Card.Text>
                  <Card.Text>{review.comment}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={`pagination justify-content-center ${styles.paginationContainer}`}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        activeClassName={styles.activePage}
      />
    </Container>
  );
};

export default Reviews;
