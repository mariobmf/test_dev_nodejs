import AppError from '../../errors/AppError';
import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { DeleteVehicleService } from '../DeleteVehicleService';
import { ShowVehicleService } from '../ShowVehicleService';

let fakeVehicleRepository: FakeVehicleRepository;
let deleteVehicleService: DeleteVehicleService;
let showVehicleService: ShowVehicleService;

describe('DeleteVehicleService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    deleteVehicleService = new DeleteVehicleService(fakeVehicleRepository);
    showVehicleService = new ShowVehicleService(fakeVehicleRepository);
  });

  it('should delete a vehicle', async () => {
    const vehicle = await fakeVehicleRepository.create({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    await deleteVehicleService.execute({ id: vehicle.id });

    await expect(
      showVehicleService.execute({ 
        id: vehicle.id
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not delete a non-existent vehicle', async () => {
    await expect(
      deleteVehicleService.execute({ 
        id: 'vehicle_non_existent'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});