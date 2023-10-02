import { Router } from 'express';
import publicRoute from './public';
import adminRoute from './admin';
import userRoute from './user';
import { LANGUAGE_KEYS, STATUS_CODES } from '../../constants';

const router = Router();
router.get('/', (req, res) => {
  res
    .status(200)
    .send({ status_code: STATUS_CODES.SUCCESS, message: LANGUAGE_KEYS.WELCOME_V1, success: false });
  console.log(LANGUAGE_KEYS.WELCOME_V1);
});

router.use('/', publicRoute);
router.use('/', userRoute);
router.use('/', adminRoute);

export default router;
