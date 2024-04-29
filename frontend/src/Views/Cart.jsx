import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../hooks/context/useShoppingCart";
import { usePostPurchased } from "../../hooks/helpers/usePostPurchase";
import { useUserProfile } from "../../hooks/helpers/useProfileUser";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
  Alert,
  Form,
  FormGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import GooglePay from "../components/payments/GooglePay";
import Snippet from "../components/shared/Snippet";
import styles from "../../static/styles/cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const { mutate: purchase } = usePostPurchased();
  const { cartItems, removeFromCart, clearCart } = useShoppingCart();
  const { data: userProfile } = useUserProfile();
  const [addShipping, setAddShipping] = useState(false);
  const shippingInfoRef = useRef();
  const shippingCost = 10; // Coste fijo de envío

  // Este es el estado de la información de envío
  const [isShippingInfoValid, setIsShippingInfoValid] = useState(true);

  const total =
    cartItems.reduce((acc, item) => acc + Number(item.price), 0) +
    (addShipping ? shippingCost : 0);

  // Si el usuario ha añadido información de envío, se setea el estado de la información de envío a true
  // y a si el contenido del input de información de envío es mayor a 10 caracteres
  useEffect(() => {
    if (addShipping) {
      setIsShippingInfoValid(shippingInfoRef.current.value.length >= 10);
    } else {
      setIsShippingInfoValid(true);
    }
  }, [addShipping, shippingInfoRef]);

  const handlePaymentSuccess = () => {
    const itemsToPurchase = cartItems.map((item) => ({ name: item.name }));
    const shipment_info = addShipping ? shippingInfoRef.current.value : null;

    const purchaseData = {
      userId: userProfile?.id, // Usar el ID del perfil del usuario
      items: itemsToPurchase,
      total,
      shipment_info,
    };

    console.log("Datos de la compra:", purchaseData);

    purchase(purchaseData, {
      onSuccess: () => {
        clearCart();
        navigate("/pago-confirmado");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <>
      <Snippet pageName="Carrito" />
      <Container fluid className={`mt-5 mb-5 p-5 ${styles.cartHeight}`}>
        {cartItems.length === 0 ? (
          <Alert variant="info">
            <Alert.Heading>
              Hey, parece que aún no hay ningún item en el carrito
            </Alert.Heading>
            <p>
              Te invitamos a que compres con confianza cualquiera de nuestros
              productos.
            </p>
          </Alert>
        ) : (
          <Row>
            <Col sm={8}>
              <ListGroup>
                {cartItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <Image src={item.image} fluid rounded />
                      </Col>
                      <Col md={6}>
                        <span>{item.name}</span>
                      </Col>
                      <Col md={2}>
                        <span>USD {item.price}</span>
                      </Col>
                      <Col md={2}>
                        <Button
                          variant="outline-danger"
                          onClick={() => removeFromCart(item.cartId)}
                        >
                          Eliminar
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            <Col sm={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>Total: USD {total.toFixed(2)}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FormCheck
                      type="checkbox"
                      label="¿Quieres añadir envío a tu compra? Si no añades la opción de envío, asumiremos que vendrás a levantar el producto a nuestro local."
                      onChange={(e) => setAddShipping(e.target.checked)}
                    />
                  </ListGroup.Item>
                  {addShipping && (
                    <ListGroup.Item>
                      <FormGroup>
                        <Form.Label>
                          Ingresa tus datos de envío: Localidad, Calle, N° de
                          puerta, Tipo de Casa/Apartamento, u otra información
                          de utilidad
                        </Form.Label>
                        <FormControl
                          as="textarea"
                          ref={shippingInfoRef}
                          onChange={() => {
                            const isInfoValid =
                              shippingInfoRef.current.value.length >= 10;
                            setIsShippingInfoValid(isInfoValid);
                          }}
                        />
                      </FormGroup>
                    </ListGroup.Item>
                  )}
                  {!isShippingInfoValid && (
                    <ListGroup.Item>
                      <Alert variant="warning">
                        Como has habilitado la opción de envío, debes ingresar
                        tus datos de envío, y estos datos deben tener al menos
                        10 caracteres de longitud.
                      </Alert>
                    </ListGroup.Item>
                  )}
                  {isShippingInfoValid && (
                    <ListGroup.Item>
                      <GooglePay
                        totalToPay={total}
                        onPaymentSuccess={handlePaymentSuccess}
                      />
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Cart;
