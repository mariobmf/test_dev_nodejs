import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import api from '../../services/api';

/**
 * @description Delete a vehicle
 */
export async function deleteVehicle(id: string): Promise<void> {
  const { data } = await api.delete(`/veiculos/${id}`);

  return data;
}

/**
 * @description Delete a vehicle
 */
export function useDeleteVehicle() {

  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteVehicle(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('vehicles');
      toast.success('Veículo excluído com sucesso!');
    },
    onError: (err) => {
      toast.error('Erro ao excluir o veículo!');
    },
  });
}
