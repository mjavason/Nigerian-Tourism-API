import express from 'express';
const router = express.Router();
import userRoute from './user.route';
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use(userRoute);

export default router;
