import { BrandType } from "./VehicleDTO";

export interface CreateVehicleDTO {
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