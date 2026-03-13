import { Router } from 'express';
import { CharacterController } from '../controllers/CharacterController';

const router = Router();
const characterController = new CharacterController();

// Quando bater na raiz dessa rota, chama o controller
router.get('/', (req, res) => characterController.getAll(req, res));

// 🆕 NOVA ROTA: Quando chegar um POST na raiz, chama o método create
router.post('/', (req, res) => characterController.create(req, res));

export default router;