import { useMutation } from 'react-query';
import api from '../../static/js/axios';

const loginUser = async (user) => {
  try {
    const { data } = await api.post('auth/jwt/create/', user);
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Usuario o contraseña incorrecta');
    }
    if (error.response?.status === 400) {
      throw new Error('Usuario o contraseña incorrecta');
    }
    if (error.response?.status === 404) {
      throw new Error('Error de conexión con el servidor');
    }
    throw error;
  }
};

export const useLogin = () => {
  return useMutation(loginUser);
};