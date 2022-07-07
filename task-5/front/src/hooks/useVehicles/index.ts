import { useQuery } from 'react-query';
import api from '../../services/api';
import { VehicleProps } from './types';

/**
 * @description Search all vehicles
 */
export async function getVehicles(): Promise<VehicleProps[]> {
  const { data } = await api.get('/veiculos');

  return data;
}

/**
 * @description Hook to fetch and cache vehicles
 */
export function useVehicles() {

  const queryName = 'vehicles';

  return useQuery(queryName, getVehicles, {
    staleTime: 1000 * 60, // 1 hora,
  });
}
