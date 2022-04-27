import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get('/user', UserController.find);
router.get('/user/:id', UserController.findOne);
router.post('/user', UserController.create);
router.put('/user/:id', UserController.updateOne);
router.delete('/user/:id', UserController.deleteOne);


export default router;
