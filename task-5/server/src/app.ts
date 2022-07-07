import 'dotenv/config';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import { routes } from './routes';
import swaggerUI from 'swagger-ui-express';
import './database';
import AppError from './errors/AppError';
import swaggerDocs from './swagger.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.use(errors());


// Error control function
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError)
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });

  console.log(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

export { app };