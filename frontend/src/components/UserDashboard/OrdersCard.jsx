import React from 'react';
import { Card } from 'react-bootstrap';

const OrdersCard = ({ items, total, shipmentInfo, status, datePurchased }) => {
  return (
    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Body>
        <Card.Title>Compra</Card.Title>
        <Card.Text>
          Total: ${total}
        </Card.Text>
        <Card.Text>
          Estado: {status}
        </Card.Text>
        <Card.Text>
          Fecha de compra: {datePurchased}
        </Card.Text>
        <Card.Text>
          Información de envío: {shipmentInfo || 'Recogida en tienda'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrdersCard;