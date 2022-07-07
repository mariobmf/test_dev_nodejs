import { VehicleDTO } from '../dto/VehicleDTO';
import { CreateVehicleDTO, FindByQueryDTO, UpdateVehicleDTO } from '../dto/VehicleRepositoryDTO';

export interface VehicleRepository {
  create: (data: CreateVehicleDTO) => Promise<VehicleDTO>;
  findAll: () => Promise<VehicleDTO[]>;
  findByQuery: (query: FindByQueryDTO) => Promise<VehicleDTO[]>;
  findById: (id: string) => Promise<VehicleDTO | null>;
  update: (id: string, date: UpdateVehicleDTO) => Promise<VehicleDTO | null>;
  delete: (id: string) => Promise<void>;
} 