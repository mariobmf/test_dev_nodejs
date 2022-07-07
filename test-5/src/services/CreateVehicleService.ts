import { BrandType } from "../dto/VehicleDTO";
import { VehicleRepository } from "../repositories/VehicleRepository";

interface CreateVehicleProps {
  veiculo: string;
  marca: BrandType;
  ano: number;
  descricao: string;
}

class CreateVehicleService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute({veiculo, ano, descricao, marca}: CreateVehicleProps) {
    const vehicle = await this.vehicleRepository.create({
      ano,
      descricao,
      marca,
      veiculo
    });

    return vehicle;
  }
}

export { CreateVehicleService };