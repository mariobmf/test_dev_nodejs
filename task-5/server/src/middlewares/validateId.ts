import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import AppError from '../errors/AppError';

export default async function validateId(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const {id} = request.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    throw new AppError('Invalid ID', 400);
  }

  return next();
}