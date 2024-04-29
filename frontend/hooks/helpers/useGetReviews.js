import { useQuery } from 'react-query';
import api from '../../static/js/axios';

export const useGetReviews = () => {
    return useQuery('reviews', async () => {
        const { data } = await api.get('reviews/');
        return data;
    });
};