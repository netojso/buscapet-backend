/* eslint-disable no-param-reassign */
import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IPhotosRepository from '../repositories/IPhotosRepository';
import Dog from '../infra/typeorm/entities/Dog';
import IDogsRepository from '../repositories/IDogsRepository';

interface IPhotos {
  url: string;
}

interface IRequest {
  user_id: string;
  dog_id: string;
  breed: string;
  description: string;
  photos: IPhotos[];
}

@injectable()
class UpdateDog {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('PhotosRepository')
    private photosRepository: IPhotosRepository,

    @inject('DogsRepository')
    private dogsRepository: IDogsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    user_id,
    dog_id,
    breed,
    description,
    photos,
  }: IRequest): Promise<Dog> {
    const user = await this.usersRepository.findById(user_id);
    const dogs = await this.dogsRepository.findByUserId(user_id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (dogs) {
      const findDog = dogs.find(dog => dog.id === dog_id);

      if (findDog) {
        findDog.photos.forEach((photoItem, index) => {
          photoItem.url = photos[index].url;
        });

        Object.assign(findDog, {
          breed,
          description,
        });

        await this.dogsRepository.save(findDog);

        return findDog;
      }
    }

    throw new Error('Dog não encontrado');
  }
}

export default UpdateDog;
