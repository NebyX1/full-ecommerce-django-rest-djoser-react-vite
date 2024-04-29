import { useMutation } from 'react-query';
import api from '../../static/js/axios';

export const useDeleteAccount = () => {
    return useMutation(
        (password) => api.delete('auth/users/me/', { data: { current_password: password } })
    );
};