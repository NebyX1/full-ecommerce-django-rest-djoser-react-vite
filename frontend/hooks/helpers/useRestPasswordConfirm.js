import { useMutation } from 'react-query';
import api from '../../static/js/axios';

const resetPasswordConfirm = async ({ uid, token, new_password, re_new_password }) => {
  const response = await api.post('auth/users/reset_password_confirm/', {
    uid,
    token,
    new_password,
    re_new_password,
  });
  return response.data;
};

export const useResetPasswordConfirm = () => {
  return useMutation(resetPasswordConfirm);
};
