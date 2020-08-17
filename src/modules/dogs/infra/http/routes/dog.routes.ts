import { Router } from 'express';
import uploadConfig from '@config/upload';

import multer from 'multer';
import DogsController from '../controllers/DogsController';

const upload = multer(uploadConfig.multer);

const dogsController = new DogsController();
const dogRouter = Router();

dogRouter.post('/', dogsController.create);

dogRouter.patch(
  '/update',
  upload.array('dog_photos', 3),
  dogsController.update,
);
export default dogRouter;
