import { useMutation } from 'react-query';
import api from '../../static/js/axios';

const purchaseItems = async ({ userId, items, total, shipment_info }) => {
  try {
    const { data } = await api.post('purchased/', { user: userId, items, total, shipment_info });
    return data;
  } catch (error) {
    throw new Error('Error al procesar la compra.');
  }
};

export const usePostPurchased = () => {
  return useMutation(purchaseItems);
};