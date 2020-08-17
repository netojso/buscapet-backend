import { injectable, inject } from 'tsyringe';

import IDogsRepository from '@modules/dogs/repositories/IDogsRepository';
import IPhotosRepository from '@modules/dogs/repositories/IPhotosRepository';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('DogsRepository')
    private dogsRepository: IDogsRepository,

    @inject('PhotosRepository')
    private photosRepository: IPhotosRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export default ShowUserService;
