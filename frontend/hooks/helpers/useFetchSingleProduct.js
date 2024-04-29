import api from '../../static/js/axios';
import { useQuery } from 'react-query';

// Función para obtener un solo producto por ID
async function fetchSingleProduct(productId) {
  try {
    const { data } = await api.get(`product/${productId}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Hook para usar la función fetchSingleProduct
export function useFetchSingleProduct(productId){
  return useQuery(['product', productId], () => fetchSingleProduct(productId), {
    enabled: !!productId, // El hook solo se ejecuta si productId es válido (no nulo/undefined)
    retry: (failureCount, error) => error.response.status !== 404, // No reintenta después de un error 404
  });
}