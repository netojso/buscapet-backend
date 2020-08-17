import { Router } from 'express';
import DogsController from '../controllers/DogsController';

const dogsController = new DogsController();
const dogRouter = Router();

dogRouter.post('/', dogsController.create);
export default dogRouter;
