import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import uploadConfig from '@config/upload';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(cors());
app.use(errors());

app.listen(3333, () => {
  console.log('Server running on Port 3333');
});
