import { Router } from 'express';
const router = Router();
import { processRequestBody, processRequestParams } from 'zod-express-middleware';
import { userController } from '../../../controllers';
import { userValidation } from '../../../validation';

//update user profile
router.patch(
  '/:id',
  [
    processRequestParams(userValidation.update.params),
    processRequestBody(userValidation.update.body),
  ],
  userController.update,
);

export default router;
