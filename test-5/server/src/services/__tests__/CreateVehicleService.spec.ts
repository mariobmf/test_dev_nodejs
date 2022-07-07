import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { CreateVehicleService } from '../CreateVehicleService';

let fakeVehicleRepository: FakeVehicleRepository;
let createVehicleService: CreateVehicleService;

describe('CreateVehicleService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    createVehicleService = new CreateVehicleService(fakeVehicleRepository);
  });

  it('should create a new vehicle', async () => {
    const vehicle = await createVehicleService.execute({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca',
    });

    expect(vehicle).toHaveProperty('id');
  });
});