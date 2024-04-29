import { useQuery } from 'react-query';
import api from '../../static/js/axios';

export const useGetProfile = () => {
    return useQuery('userProfile', async () => {
        const { data } = await api.get('user/profile/');
        return data;
    });
};