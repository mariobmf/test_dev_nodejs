export type BrandType = "Toyota" | "Volkswagen" | "Hyundai" | "Ford" | "Honda" | "Nissan" | "Chevrolet" | "Kia" | "Fiat" | "BMW";

export interface VehicleProps {
  _id: string;
  veiculo: string;
  ano: number;
  descricao: string;
  marca: BrandType;
  vendido: boolean;
  created: string;
  updated: string;
}