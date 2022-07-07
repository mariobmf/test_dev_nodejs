import { BrandType, VehicleDTO } from '../dto/VehicleDTO';

export interface VehicleCreateDTO {
  veiculo: string;
  marca: BrandType;
  ano: number;
  descricao: string;
}

export interface UpdateVehicleDTO {
  veiculo?: string;
  ano?: number;
  descricao?: string;
  marca?: BrandType;
  vendido?: boolean;
}

export interface FindByQueryDTO {
  veiculo?: string;
  ano?: number;
  descricao?: string;
  marca?: BrandType;
  vendido?: boolean;
}

export interface VehicleRepository {
  create: (data: VehicleCreateDTO) => Promise<VehicleDTO>;
  findAll: () => Promise<VehicleDTO[]>;
  findByQuery: (query: FindByQueryDTO) => Promise<VehicleDTO[]>;
  findById: (id: string) => Promise<VehicleDTO | null>;
  update: (id: string, date: UpdateVehicleDTO) => Promise<VehicleDTO | null>;
  delete: (id: string) => Promise<void>;
} 