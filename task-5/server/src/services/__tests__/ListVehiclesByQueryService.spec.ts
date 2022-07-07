import { FakeVehicleRepository } from '../../repositories/fakes/FakeVehicleRepository';
import { ListVehiclesByQueryService } from '../ListVehiclesByQueryService';

let fakeVehicleRepository: FakeVehicleRepository;
let listVehiclesByQueryService: ListVehiclesByQueryService;

describe('ListVehiclesByQueryService', () => {
  beforeEach(() => {
    fakeVehicleRepository = new FakeVehicleRepository();

    listVehiclesByQueryService = new ListVehiclesByQueryService(fakeVehicleRepository);
  });

  it('should list the vehicles through a custom query', async () => {
    await fakeVehicleRepository.create({
      ano: 1996,
      descricao: 'Fusca Itamar',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    await fakeVehicleRepository.create({
      ano: 1980,
      descricao: 'Fusca',
      marca: 'Volkswagen',
      veiculo: 'Fusca'
    });

    const vehicles = await listVehiclesByQueryService.execute({
      ano: 1996
    });

    expect(vehicles).toHaveLength(1);
  });
});