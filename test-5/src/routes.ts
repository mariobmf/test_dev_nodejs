import { Router } from "express";
import { VehiclesController } from "./controllers/VehiclesController";
import { celebrate, Joi, errors, Segments } from 'celebrate';
import validateId from "./middlewares/validateId";
import { ChangeVehicleDataController } from "./controllers/ChangeVehicleDataController";
import { FindByQueryController } from "./controllers/FindByQueryController";

const vehiclesController = new VehiclesController();
const changeVehicleDataController = new ChangeVehicleDataController();
const findByQueryController = new FindByQueryController();

const routes = Router();


routes.get(
  '/veiculos/find',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      veiculo: Joi.string(),
      marca: Joi.string().valid('Toyota', 'Volkswagen', 'Hyundai', 'Ford', 'Honda', 'Nissan', 'Chevrolet', 'Kia', 'Fiat', 'BMW'),
      ano: Joi.number().integer(),
      descricao: Joi.string(),
      vendido: Joi.boolean(),
    })
  }),
  findByQueryController.index
);

routes.post(
  '/veiculos',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      veiculo: Joi.string().required(),
      marca: Joi.string().valid('Toyota', 'Volkswagen', 'Hyundai', 'Ford', 'Honda', 'Nissan', 'Chevrolet', 'Kia', 'Fiat', 'BMW').required(),
      ano: Joi.number().integer().required(),
      descricao: Joi.string().required(),
    })
  }),
  vehiclesController.store
);

routes.get('/veiculos', vehiclesController.index);

routes.get(
  '/veiculos/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  validateId,
  vehiclesController.show
);

routes.put(
  '/veiculos/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: Joi.object().keys({
      veiculo: Joi.string().required(),
      marca: Joi.string().valid('Toyota', 'Volkswagen', 'Hyundai', 'Ford', 'Honda', 'Nissan', 'Chevrolet', 'Kia', 'Fiat', 'BMW').required(),
      ano: Joi.number().integer().required(),
      descricao: Joi.string().required(),
      vendido: Joi.boolean().required(),
    })
  }),
  validateId,
  vehiclesController.update
);

routes.delete(
  '/veiculos/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  validateId,
  vehiclesController.delete
);

routes.patch(
  '/veiculos/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: Joi.object().keys({
      veiculo: Joi.string(),
      marca: Joi.string().valid('Toyota', 'Volkswagen', 'Hyundai', 'Ford', 'Honda', 'Nissan', 'Chevrolet', 'Kia', 'Fiat', 'BMW'),
      ano: Joi.number().integer(),
      descricao: Joi.string(),
      vendido: Joi.boolean(),
    })
  }),
  validateId,
  changeVehicleDataController.update
);


export {routes}