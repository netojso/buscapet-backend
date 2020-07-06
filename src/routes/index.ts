import { Router } from 'express';
import dogRoute from './dog.route';

const routes = Router();

routes.use('/dogs', dogRoute);

export default routes;
