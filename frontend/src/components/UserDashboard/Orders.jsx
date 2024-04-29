import React from 'react';
import OrdersCard from './OrdersCard';
import { useGetPurchases } from '../../../hooks/helpers/useGetPurchases';
import { Alert, Container } from 'react-bootstrap';

const Orders = () => {
  const { data: purchases, isLoading, isError } = useGetPurchases();

  if (isLoading) return <Container>Cargando compras...</Container>;
  if (isError) return <Container>Error al cargar las compras</Container>;

  const currentOrders = purchases.filter(purchase => purchase.status === 'Pendiente' || purchase.status === 'Procesando');

  if (currentOrders.length === 0) {
    return <Alert variant="secondary">Aún no has hecho ninguna compra</Alert>;
  }

  return (
    <Container>
      {currentOrders.map(purchase => (
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

export default Orders;