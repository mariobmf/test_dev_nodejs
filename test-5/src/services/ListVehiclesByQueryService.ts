import { BrandType } from "../dto/VehicleDTO";
import { VehicleRepository } from "../repositories/VehicleRepository";

interface IRequest {
  veiculo?: string;
  ano?: number;
  descricao?: string;
  marca?: BrandType;
  vendido?: boolean;
}

class ListVehiclesByQueryService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute(query: IRequest) {
    const vehicles = await this.vehicleRepository.findByQuery(query);    

    return vehicles;
  }
}

export {ListVehiclesByQueryService};