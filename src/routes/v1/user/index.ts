import express from 'express';
const router = express.Router();
import userRoute from './user.route';
import tourismRoute from './tourism.route';
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use('/user', userRoute);
router.use('/tourism', tourismRoute);

export default router;
