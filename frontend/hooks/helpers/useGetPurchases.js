import { useQuery } from 'react-query';
import api from '../../static/js/axios';

export const useGetPurchases = () => {
    return useQuery('purchases', async () => {
        const { data } = await api.get('purchased/');
        return data;
    });
};