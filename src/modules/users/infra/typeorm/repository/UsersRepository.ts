import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(user_id);

    return user;
  }

  public async findByWhatsApp(whatsapp: number): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { whatsapp } });

    return user;
  }

  public async create({ name, whatsapp }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, whatsapp });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
