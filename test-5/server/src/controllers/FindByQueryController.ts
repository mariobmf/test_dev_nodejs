
import { Request, Response } from "express";
import { MongoVehicleRepository } from "../providers/MongoVehicleRepository";
import { CreateVehicleService } from "../services/CreateVehicleService";
import { DeleteVehicleService } from "../services/DeleteVehicleService";
import { ListVehiclesByQueryService } from "../services/ListVehiclesByQueryService";
import { ListVehiclesService } from "../services/ListVehiclesService";
import { ShowVehicleService } from "../services/ShowVehicleService";
import { UpdateVehicleService } from "../services/UpdateVehicleService";

class FindByQueryController {
  public async index(request: Request, response:Response) {
    const { query } = request;

    const mongoVehicleRepository = new MongoVehicleRepository();

    const listVehiclesByQueryService = new ListVehiclesByQueryService(mongoVehicleRepository);

    const vehicles = await listVehiclesByQueryService.execute(query);
    
    response.status(200).json(vehicles);
  }
}

export {FindByQueryController};