import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { tourismController } from '../../../controllers';
import { tourismValidation } from '../../../validation';

// router.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));
router.post('/', processRequestBody(tourismValidation.create.body), tourismController.create);
router.get('/search', processRequestQuery(tourismValidation.find.query), tourismController.find);
router.get('/:pagination', tourismController.getAll);
router.patch(
  '/:id',
  [
    processRequestBody(tourismValidation.update.body),
    processRequestParams(tourismValidation.update.params),
  ],
  tourismController.update,
);
router.delete(
  '/:id',
  [processRequestParams(tourismValidation.getById.params)],
  tourismController.delete,
);

export default router;
