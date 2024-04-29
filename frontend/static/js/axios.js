import axios from 'axios';
import useAuth from '../../hooks/context/useAuth';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const auth = useAuth.getState().auth;
    if (auth?.access) {
      config.headers['Authorization'] = `Bearer ${auth.access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;