import { container } from 'tsyringe';

import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repository/UsersRepository';

import IDogsRepository from '@modules/dogs/repositories/IDogsRepository';
import DogsRepository from '@modules/dogs/infra/typeorm/repository/DogsRepository';

import PhotosRepository from '@modules/dogs/infra/typeorm/repository/PhotosRepository';
import IPhotosRepository from '@modules/dogs/repositories/IPhotosRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IDogsRepository>('DogsRepository', DogsRepository);

container.registerSingleton<IPhotosRepository>(
  'PhotosRepository',
  PhotosRepository,
);
