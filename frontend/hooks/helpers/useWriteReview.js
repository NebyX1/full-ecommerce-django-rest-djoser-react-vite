import { useMutation } from 'react-query';
import api from '../../static/js/axios';

const writeReview = async (reviewData) => {
  const { data } = await api.post('reviews/', reviewData);
  return data;
};

export const useWriteReview = () => {
  return useMutation(writeReview);
};