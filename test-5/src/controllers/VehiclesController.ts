import { Request, Response } from "express";
import { MongoVehicleRepository } from "../providers/MongoVehicleRepository";
import { CreateVehicleService } from "../services/CreateVehicleService";
import { DeleteVehicleService } from "../services/DeleteVehicleService";
import { ListVehiclesService } from "../services/ListVehiclesService";
import { ShowVehicleService } from "../services/ShowVehicleService";
import { UpdateVehicleService } from "../services/UpdateVehicleService";

class VehiclesController {
  public async store(request: Request, response:Response) {
    const {
      veiculo,
      marca,
      ano,
      descricao
    } = request.body;

    const mongoVehicleRepository = new MongoVehicleRepository();

    const createVehicleService = new CreateVehicleService(mongoVehicleRepository);

    createVehicleService.execute({
      veiculo,
      marca,
      ano,
      descricao
    });
    
    response.status(201).send();
  }

  public async show(request: Request, response:Response) {
    const { id } = request.params;

    const mongoVehicleRepository = new MongoVehicleRepository();

    const showVehicleService = new ShowVehicleService(mongoVehicleRepository);

    const vehicle = await showVehicleService.execute({ id });
    
    response.status(200).json(vehicle);
  }

  public async index(request: Request, response:Response) {
    const mongoVehicleRepository = new MongoVehicleRepository();

    const listVehiclesService = new ListVehiclesService(mongoVehicleRepository);

    const vehicles = await listVehiclesService.execute();
    
    response.status(200).json(vehicles);
  }

  public async update(request: Request, response:Response) {
    const { id } = request.params;
    const {
      veiculo,
      marca,
      ano,
      descricao,
      vendido,
    } = request.body;

    const mongoVehicleRepository = new MongoVehicleRepository();

    const updateVehicleService = new UpdateVehicleService(mongoVehicleRepository);

    const vehicle = await updateVehicleService.execute({ 
      id,
      veiculo,
      marca,
      ano,
      descricao,
      vendido,
    });
    
    response.status(200).json(vehicle);
  }

  public async delete(request: Request, response:Response) {
    const { id } = request.params;

    const mongoVehicleRepository = new MongoVehicleRepository();

    const deleteVehicleService = new DeleteVehicleService(mongoVehicleRepository);

    const vehicle = await deleteVehicleService.execute({ id });
    
    response.status(200).json(vehicle);
  }
}

export {VehiclesController};