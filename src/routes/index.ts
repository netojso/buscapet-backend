import { Router } from 'express';
import dogRoute from '@modules/dogs/infra/http/routes/dog.routes';
import userRoute from '@modules/users/infra/http/routes/user.routes';

const routes = Router();

routes.use('/dogs', dogRoute);
routes.use('/users', userRoute);

export default routes;
