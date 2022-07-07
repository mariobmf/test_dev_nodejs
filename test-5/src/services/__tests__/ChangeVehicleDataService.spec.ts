import AppError from '../../errors/AppError';
import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { ChangeVehicleDataService } from '../ChangeVehicleDataService';

let fakeVehicleRepository: FakeVehicleRepository;
let changeVehicleDataService: ChangeVehicleDataService;

describe('ChangeVehicleDataService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    changeVehicleDataService = new ChangeVehicleDataService(fakeVehicleRepository);
  });

  it('should change a vehicle data', async () => {
    const vehicle = await fakeVehicleRepository.create({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    const vehicleChanged = await changeVehicleDataService.execute({
      id: vehicle.id,
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca',
      vendido: true,
    });

    expect(vehicleChanged).toEqual({
      id: vehicle.id,
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca',
      vendido: true,
      created: vehicleChanged?.created,
      updated: vehicleChanged?.updated,
    });
  });

  it('should not change the data of a non-existent vehicle', async () => {
    await expect(
      changeVehicleDataService.execute({
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