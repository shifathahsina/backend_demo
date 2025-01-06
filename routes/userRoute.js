import express from 'express';
import { fetch,create,update,remove,fetchprt } from '../controller/userController.js';
const router = express.Router();

router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/remove/:id',remove);
router.get('/fetchprt/:id',fetchprt);
export default router;