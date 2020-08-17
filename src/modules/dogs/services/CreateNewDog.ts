import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IDogsRepository from '../repositories/IDogsRepository';
import IPhotosRepository from '../repositories/IPhotosRepository';
import Dog from '../infra/typeorm/entities/Dog';

interface IPhotos {
  user_id: string;
  url: string;
}

interface IRequest {
  breed: string;
  description: string;
  user_id: string;
  longitude: number;
  latitude: number;
  photos: IPhotos[];
}

@injectable()
class CreateNewDog {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('DogsRepository')
    private dogsRepository: IDogsRepository,

    @inject('PhotosRepository')
    private photosRepository: IPhotosRepository,
  ) {}

  public async execute({
    breed,
    description,
    user_id,
    latitude,
    longitude,
    photos,
  }: IRequest): Promise<Dog> {
    const checkUserExists = await this.usersRepository.findById(user_id);

    if (!checkUserExists) {
      throw new Error('Esse usuário não existe');
    }

    const dog = await this.dogsRepository.create({
      breed,
      description,
      latitude,
      longitude,
      user_id,
      photos,
    });

    return dog;
  }
}

export default CreateNewDog;
