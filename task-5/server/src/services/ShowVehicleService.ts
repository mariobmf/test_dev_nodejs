import AppError from "../errors/AppError";
import { VehicleRepository } from "../repositories/VehicleRepository";

interface IRequest {
  id: string;
}

class ShowVehicleService {
  constructor (
    private vehicleRepository: VehicleRepository,
  ) {}

  public async execute({ id }: IRequest) {
    const vehicle = await this.vehicleRepository.findById(id);

    if(!vehicle){
      throw new AppError('Vehicle not Found', 404);
    }

    return vehicle;
  }
}

export {ShowVehicleService};