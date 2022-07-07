import { VehicleRepository } from "../repositories/VehicleRepository";

class ListVehiclesService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute() {
    const vehicles = await this.vehicleRepository.findAll();

    return vehicles;
  }
}

export {ListVehiclesService};