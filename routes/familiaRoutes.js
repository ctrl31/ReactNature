import express from 'express';
import { getFamilia, getMessage , create} from '../controllers/familiaControllers.js';
import { ensureAuth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/familia', ensureAuth, create); // Cambié la ruta a '/familia' para que sea más clara
router.get('/mi-familia', getFamilia);
router.get('/mensaje', getMessage);

export default router;
