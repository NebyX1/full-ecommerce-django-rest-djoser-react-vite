import { useMutation } from 'react-query';
import api from '../../static/js/axios';

export const useActivateUser = () => {
    return useMutation(({ uid, token }) => {
        return api.post('auth/users/activation/', { uid, token });
    });
};