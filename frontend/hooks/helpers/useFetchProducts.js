import api from '../../static/js/axios';
import { useQuery } from 'react-query';

async function fetchProducts() {
  try {
    const { data } = await api.get('products/');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useFetchProducts(){
return useQuery(['products'], fetchProducts);
};