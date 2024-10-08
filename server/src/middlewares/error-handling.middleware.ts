import ApiError from '../errors/api.error';
import { Request, Response, NextFunction } from 'express';

export default function(err: ApiError, req: Request, res: Response, next: NextFunction) {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Unexpected error' });
}