import api from '../../static/js/axios';
import { useQuery } from 'react-query';

async function fetchGemsAndPlants() {
  try {
    const { data } = await api.get('gem-and-plants/');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useFetchGemsAndPlants(){
return useQuery(['gemsandplants'], fetchGemsAndPlants);
};