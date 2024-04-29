import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchSingleProduct } from "../../hooks/helpers/useFetchSingleProduct";
import StarRating from "../components/products/Stars";
import { useShoppingCart } from "../../hooks/context/useShoppingCart";
import useAuth from "../../hooks/context/useAuth";
import Snippet from "../components/shared/Snippet";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Alert
} from "react-bootstrap";
import { FaCartPlus, FaSmile } from "react-icons/fa";

const ProductDetail = () => {

  // Importamos el estado de autenticación desde el hook useAuth
  const auth = useAuth((state) => state.auth);

  // Importamos el estado de nuestro carrito de compras
  const { addToCart } = useShoppingCart();

  // Importamos el id del producto que estamos viendo desde la URL
  const { productId } = useParams();

  // Importamos el estado de nuestro producto desde el hook useFetchSingleProduct de React Query
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useFetchSingleProduct(productId);

  // Si el producto no existe, retornamos un mensaje de error
  if (isLoading) return <div>Cargando producto...</div>;

  // Si hay un error, retornamos un mensaje de error
  if (isError) {
    if (error.response && error.response.status === 404) {
      return <div>El producto solicitado no existe.</div>;
    }
    return <div>Error al cargar el producto: {error.message}</div>;
  }
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <>
      {!isLoading && product && <Snippet pageName={`${product.name}`} />}

      <Container className="p-5">
        {product && (
          <>
            <Row className="justify-content-md-center">
              {/* Columna de Imagen y Botón de volver a Productos */}
              <Col md={5} className="d-flex flex-column">
                <Image
                  className="rounded-5 shadow-sm"
                  src={product.image}
                  alt={product.name}
                  fluid
                />
                <Link className="btn btn-light my-3" to="/store">
                  Volver
                </Link>
              </Col>

              {/* Columna de Descripción y añadir al carrito */}
              <Col md={5} className="mt-5">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <StarRating stars={product.stars} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p>{product.description}</p>
                  </ListGroup.Item>
                </ListGroup>

                {/* Card que contiene las funciones de añadir al carrito */}
                <Card className="mt-5">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Precio: </Col>
                        <Col className="text-end">{`USD ${product.price}`}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Disponibilidad: </Col>
                        <Col className="text-end">
                          {product.stock > 0 ? "En Stock" : "No hay Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {/* Muestra el botón de añadir al carrito o la alerta según el estado de autenticación */}
                      {auth ? (
                        <Button
                          className="btn-block shadow-sm rounded-5"
                          variant="outline-success"
                          type="button"
                          onClick={() => addToCart(product)}
                          disabled={product.stock === 0}
                        >
                          <FaCartPlus /> Añadir a Carrito
                        </Button>
                      ) : (
                        <Alert variant="warning">
                          <FaSmile /> Para comprar debe ser un usuario
                          registrado y estar autenticado
                        </Alert>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductDetail;
