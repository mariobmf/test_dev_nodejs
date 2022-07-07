import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import api from '../../services/api';
import { VehicleProps } from '../useVehicles/types';
import { UseRegisterVehicleProps } from './types';

/**
 * @description Register a vehicle
 */
export async function registerVehicle({ ano, descricao, marca, veiculo }: UseRegisterVehicleProps): Promise<VehicleProps> {
  const { data } = await api.post('/veiculos', {
    ano,
    descricao,
    marca,
    veiculo
  });

  return data;
}

/**
 * @description Register a vehicle
 */
export function useRegisterVehicle() {

  const queryClient = useQueryClient();

  return useMutation((props: UseRegisterVehicleProps) => registerVehicle(props), {
    onSuccess: () => {
      queryClient.invalidateQueries('vehicles');
      toast.success('Veículo cadastrado com sucesso!');
    },
    onError: (err) => {
      if(err instanceof AxiosError){
        if(err.response?.status === 400){
          toast.error('Erro ao cadastrar o veículo, verifique o formulário!');
        }
      }
    },
  });
}
