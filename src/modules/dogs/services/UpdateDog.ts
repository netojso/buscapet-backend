/* eslint-disable no-param-reassign */
import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IPhotosRepository from '../repositories/IPhotosRepository';
import Dog from '../infra/typeorm/entities/Dog';
import IDogsRepository from '../repositories/IDogsRepository';

interface IPhotos {
  user_id: string;
  dog_id: string;
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
  }: IRequest): Promise<Dog[] | null> {
    const user = await this.usersRepository.findById(user_id);
    const dogs = await this.dogsRepository.findByUserId(user_id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (dogs) {
      const findDog = dogs.find(dog => dog.id === dog_id);
      if (findDog) {
        Object.assign(findDog, {
          breed,
          description,
        });

        await this.dogsRepository.save(findDog);

        findDog.photos.map(photoItem => {
          photos.forEach(photo => {
            console.log('----');
            console.log(photoItem.url);
            console.log('----');
            console.log(photo.url);
            console.log('----');
            photoItem.url = photo.url;
          });
        });

        // const promise = findDog.photos.map(async newPhoto => {
        //   await this.photosRepository.updatePhotos(newPhoto);
        // });

        Promise.all(promise);

        return dogs;
      }
    }

    throw new Error('Dog não encontrado');
  }
}

export default UpdateDog;
