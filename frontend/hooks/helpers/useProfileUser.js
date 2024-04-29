import { useQuery } from 'react-query';
import api from '../../static/js/axios';

export const useUserProfile = () => {
    return useQuery('userProfile', async () => {
        const { data } = await api.get('auth/users/me/');
        return data;
    });
};
