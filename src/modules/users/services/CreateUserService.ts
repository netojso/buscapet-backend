import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  whatsapp: number;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, whatsapp }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByWhatsApp(whatsapp);

    if (checkUserExists) {
      throw new Error('WhatsApp already used');
    }

    const user = await this.usersRepository.create({
      name,
      whatsapp,
    });

    return user;
  }
}

export default CreateUserService;
