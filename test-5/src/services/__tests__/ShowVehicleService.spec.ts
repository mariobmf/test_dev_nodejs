import AppError from '../../errors/AppError';
import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { ShowVehicleService } from '../ShowVehicleService';

let fakeVehicleRepository: FakeVehicleRepository;
let showVehicleService: ShowVehicleService;

describe('ShowVehicleService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    showVehicleService = new ShowVehicleService(fakeVehicleRepository);
  });

  it('should show the data of a vehicle', async () => {
    const vehicle = await fakeVehicleRepository.create({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    const vehicleShow = await showVehicleService.execute({ id: vehicle.id });

    expect(vehicleShow).toHaveProperty('id');
  });

  it('should not show the data of a non-existent vehicle', async () => {
    await expect(
      showVehicleService.execute({ 
        id: 'vehicle_non_existent'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});