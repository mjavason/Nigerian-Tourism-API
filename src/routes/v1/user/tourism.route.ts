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

router.get('/search', processRequestQuery(tourismValidation.find.query), tourismController.find);
router.get('/:pagination', tourismController.getAll);

export default router;
