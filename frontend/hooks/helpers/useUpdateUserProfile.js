import { useMutation } from 'react-query';
import api from '../../static/js/axios';

export const useUpdateUserProfile = () => {
  return useMutation((userData) => api.patch('user/profile/', userData));
};