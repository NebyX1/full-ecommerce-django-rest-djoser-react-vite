import { useMutation } from 'react-query';
import api from '../../static/js/axios';

const updatePurchase = async ({ purchaseId, updateData }) => {
  const { data } = await api.patch(`purchased/${purchaseId}/`, updateData);
  return data;
};

export const useUpdatePurchase = () => {
  return useMutation(updatePurchase);
};