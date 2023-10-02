import { Request, Response } from 'express';
import { tourismService } from '../services';
import {
  SuccessResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  NotFoundResponse,
} from '../helpers/response';
import { LANGUAGE_KEYS } from '../constants';

class Controller {
  async create(req: Request, res: Response) {
    const data = await tourismService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);
    if (!pagination) pagination = 1;
    const data = await tourismService.getAll(pagination);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    const data = await tourismService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await tourismService.update({ _id: id }, req.body);

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, LANGUAGE_KEYS.UPDATED);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await tourismService.softDelete({ _id: id });

    if (!data) return NotFoundResponse(res);
    
    return SuccessResponse(res, data, LANGUAGE_KEYS.DELETED);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await tourismService.hardDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, LANGUAGE_KEYS.DELETED);
  }
}

export const tourismController = new Controller();
