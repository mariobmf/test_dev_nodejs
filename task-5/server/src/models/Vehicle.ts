import mongoose from 'mongoose';
import { VehicleDTO } from '../dto/VehicleDTO';


const schema = new mongoose.Schema<VehicleDTO>({
  veiculo: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    enum: ['Toyota', 'Volkswagen', 'Hyundai', 'Ford', 'Honda', 'Nissan', 'Chevrolet', 'Kia', 'Fiat', 'BMW'],
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  vendido: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps:{
    createdAt: 'created',
    updatedAt: 'updated',
  }
});

const Vehicle = mongoose.model<VehicleDTO>("Vehicle", schema);

export { Vehicle };