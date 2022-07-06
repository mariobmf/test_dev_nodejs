import { Request, Response } from "express";
import { MongoVehicleRepository } from "../providers/MongoVehicleRepository";
import { ChangeVehicleDataService } from "../services/ChangeVehicleDataService";

class ChangeVehicleDataController {
  public async update(request: Request, response:Response) {
    const { id } = request.params;
    const vehicleData = request.body;

    const mongoVehicleRepository = new MongoVehicleRepository();

    const changeVehicleDataService = new ChangeVehicleDataService(mongoVehicleRepository);

    const vehicle = await changeVehicleDataService.execute({ 
      id,
      ...vehicleData
    });
    
    response.status(200).json(vehicle);
  }
}

export {ChangeVehicleDataController};