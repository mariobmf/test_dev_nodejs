import AppError from '../../errors/AppError';
import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { UpdateVehicleService } from '../UpdateVehicleService';

let fakeVehicleRepository: FakeVehicleRepository;
let updateVehicleService: UpdateVehicleService;

describe('UpdateVehicleService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    updateVehicleService = new UpdateVehicleService(fakeVehicleRepository);
  });

  it('should update all vehicle data', async () => {
    const vehicle = await fakeVehicleRepository.create({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    const vehicleUpdated = await updateVehicleService.execute({
      id: vehicle.id,
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca',
      vendido: true,
    });

    expect(vehicleUpdated).toEqual({
      id: vehicle.id,
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca',
      vendido: true,
      created: vehicleUpdated?.created,
      updated: vehicleUpdated?.updated,
    });
  });

  it('should not update the data of a non-existent vehicle', async () => {
    await expect(
      updateVehicleService.execute({
        id: 'vehicle_non_existent',
        ano: 1996,
        descricao: 'Fusca Itamar',
        marca: 'Volkswagen',
        veiculo: 'Fusca',
        vendido: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});