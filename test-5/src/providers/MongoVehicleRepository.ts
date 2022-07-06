import { Vehicle } from "../models/Vehicle";
import { FindByQueryDTO, UpdateVehicleDTO, VehicleCreateDTO,VehicleRepository } from "../repositories/VehicleRepository";

class MongoVehicleRepository implements VehicleRepository {
  public async create({veiculo, ano, descricao, marca}: VehicleCreateDTO) {
    await Vehicle.create({
      veiculo,
      ano,
      descricao,
      marca
    })
  }
  
  public async findAll() {
    const vehicles = await Vehicle.find();

    return vehicles;
  }
  
  public async findByQuery(query: FindByQueryDTO) {
    const vehicles = await Vehicle.find({ ...query });

    return vehicles;
  }
  
  public async findById(id: string) {
    const vehicle = await Vehicle.findById(id);

    return vehicle;
  }
  
  public async update(id: string, vehicleData: UpdateVehicleDTO) {
    const vehicle = await Vehicle.findById(id);

    if(!vehicle) return null;

    Object.assign(vehicle, {...vehicleData}),

    vehicle.save();

    return vehicle;
  }
  
  public async delete(id: string) {
    await Vehicle.deleteOne({ id });
  }
}

export { MongoVehicleRepository };