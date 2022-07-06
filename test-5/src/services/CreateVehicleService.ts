import { VehicleRepository } from "../repositories/VehicleRepository";

interface CreateVehicleProps {
  veiculo: string;
  marca: string;
  ano: number;
  descricao: string;
}

class CreateVehicleService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute({veiculo, ano, descricao, marca}: CreateVehicleProps) {
    await this.vehicleRepository.create({
      ano,
      descricao,
      marca,
      veiculo
    });
  }
}

export {CreateVehicleService};