// PastOrders.jsx
import React from 'react';
import OrdersCard from './OrdersCard';
import { useGetPurchases } from '../../../hooks/helpers/useGetPurchases';
import { Alert, Container } from 'react-bootstrap';

const PastOrders = () => {
  const { data: purchases, isLoading, isError } = useGetPurchases();

  if (isLoading) return <Container>Cargando compras pasadas...</Container>;
  if (isError) return <Container>Error al cargar las compras pasadas</Container>;

  const pastOrders = purchases.filter(purchase => purchase.status === 'Enviado');

  if (pastOrders.length === 0) {
    return <Alert variant="secondary">No hay compras pasadas</Alert>;
  }

  return (
    <Container>
      {pastOrders.map(purchase => (
        <OrdersCard
          key={purchase.id}
          items={purchase.items}
          total={purchase.total}
          shipmentInfo={purchase.shipment_info}
          status={purchase.status}
          datePurchased={purchase.date_purchased}
        />
      ))}
    </Container>
  );
};

export default PastOrders;
