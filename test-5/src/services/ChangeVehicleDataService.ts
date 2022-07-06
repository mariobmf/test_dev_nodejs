
import { BrandType } from "../dto/VehicleDTO";
import AppError from "../errors/AppError";
import { VehicleRepository } from "../repositories/VehicleRepository";

interface IRequest {
  id: string;
  veiculo?: string;
  ano?: number;
  descricao?: string;
  marca?: BrandType;
  vendido?: boolean;
}

class ChangeVehicleDataService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute({id, ...data}: IRequest) {
    const vehicle = await this.vehicleRepository.findById(id);

    if(!vehicle){
      throw new AppError('Vehicle not Found', 404);
    }

    const vehicleUpdated = await this.vehicleRepository.update(id, data);

    return vehicleUpdated;
  }
}

export { ChangeVehicleDataService };