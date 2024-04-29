import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { Card } from 'react-bootstrap';
import styles from "../../../static/styles/product.module.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para manejar el clic en la tarjeta y navegar a la página del producto
  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className={`${styles.card}`} onClick={navigateToProduct} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={product.image} className={`${styles.cardImage}`} alt={product.name} />
      <Card.Body className={`${styles.cardBody}`}>
        <Card.Title className={`${styles.cardTitle}`}>{product.name}</Card.Title>
        <Card.Text className={`${styles.cardText}`}>
          USD {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

