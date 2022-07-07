import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import api from '../../services/api';
import { VehicleProps } from '../useVehicles/types';
import { UseUpdateVehicleProps } from './types';

/**
 * @description Update a vehicle
 */
export async function updateVehicle({ id, ano, descricao, marca, veiculo, vendido }: UseUpdateVehicleProps): Promise<VehicleProps> {
  const { data } = await api.put(`/veiculos/${id}`, {
    ano,
    descricao,
    marca,
    veiculo,
    vendido,
  });

  return data;
}

/**
 * @description Update a vehicle
 */
export function useUpdateVehicle() {

  const queryClient = useQueryClient();

  return useMutation((props: UseUpdateVehicleProps) => updateVehicle(props), {
    onSuccess: () => {
      queryClient.invalidateQueries('vehicles');
      toast.success('Veículo atualizado com sucesso!');
    },
    onError: (err) => {
      if(err instanceof AxiosError){
        if(err.response?.status === 400){
          toast.error('Erro ao atualizar o veículo, verifique o formulário!');
        }
      }
    },
  });
}
