import { useMutation } from 'react-query';
import api from '../../static/js/axios';

const changePassword = async ({ newPassword, reNewPassword, currentPassword }) => {
  const { data } = await api.post('auth/users/set_password/', {
    new_password: newPassword,
    re_new_password: reNewPassword,
    current_password: currentPassword,
  });
  return data;
};

export const useChangePassword = () => {
  return useMutation(changePassword);
};