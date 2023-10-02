import express from 'express';
const router = express.Router();
import tourismRoute from './tourism.route';
import isAdmin from '../../../middleware/is_admin.middleware';

router.use(isAdmin);
router.use('/tourism', tourismRoute);

export default router;
