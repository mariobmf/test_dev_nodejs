import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { ListVehiclesService } from '../ListVehiclesService';

let fakeVehicleRepository: FakeVehicleRepository;
let listVehiclesService: ListVehiclesService;

describe('ListVehiclesService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    listVehiclesService = new ListVehiclesService(fakeVehicleRepository);
  });

  it('should list all registered vehicles', async () => {
    await fakeVehicleRepository.create({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    const vehicles = await listVehiclesService.execute();

    expect(vehicles).toHaveLength(1);
  });
});