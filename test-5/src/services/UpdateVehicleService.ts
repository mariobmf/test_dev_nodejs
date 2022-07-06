
import { BrandType } from "../dto/VehicleDTO";
import AppError from "../errors/AppError";
import { VehicleRepository } from "../repositories/VehicleRepository";

interface IRequest {
  id: string;
  veiculo: string;
  ano: number;
  descricao: string;
  marca: BrandType;
  vendido: boolean;
}

class UpdateVehicleService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute({id, veiculo, ano, descricao, marca, vendido}: IRequest) {
    const vehicle = await this.vehicleRepository.findById(id);

    if(!vehicle){
      throw new AppError('Vehicle not Found', 404);
    }

    const vehicleUpdated = await this.vehicleRepository.update(id,{
      veiculo,
      ano,
      descricao,
      marca,
      vendido,
    });

    return vehicleUpdated;
  }
}

export { UpdateVehicleService };