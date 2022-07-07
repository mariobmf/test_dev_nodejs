import { VehicleDTO } from "../../dto/VehicleDTO";
import { FindByQueryDTO, UpdateVehicleDTO, CreateVehicleDTO } from "../../dto/VehicleRepositoryDTO";
import { VehicleRepository } from "../VehicleRepository";

class FakeVehicleRepository implements VehicleRepository {
  private vehicles: VehicleDTO[] = [];

  public async create({veiculo, ano, descricao, marca}: CreateVehicleDTO) {
    const vehicle = {
      id: `${new Date().getTime()}`,
      veiculo,
      ano,
      descricao,
      marca,
      vendido: true,
      created: new Date(),
      updated: new Date(),
    }

    this.vehicles.push(vehicle);

    return vehicle;
  }
  
  public async findAll() {
    return this.vehicles;
  }
  
  public async findByQuery({ano, descricao, marca, veiculo, vendido}: FindByQueryDTO) {
    const vehicles = this.vehicles.filter(vehicle => 
      vehicle.ano === ano ||
      vehicle.descricao === descricao ||
      vehicle.marca === marca ||
      vehicle.veiculo === veiculo ||
      vehicle.vendido === vendido
    );

    return vehicles;
  }
  
  public async findById(id: string) {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === id);

    return vehicle || null;
  }
  
  public async update(id: string, vehicleData: UpdateVehicleDTO) {
    const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.id === id);

    if(vehicleIndex < 0) return null;

    this.vehicles[vehicleIndex] = Object.assign(this.vehicles[vehicleIndex], { ...vehicleData });

    return this.vehicles[vehicleIndex];
  }
  
  public async delete(id: string) {
    const vehicles = this.vehicles.filter(vehicle => vehicle.id !== id)

    this.vehicles = vehicles;
  }
}

export { FakeVehicleRepository };