import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByWhatsApp(whatsapp: number): Promise<User | undefined>;
  findById(user_id: string): Promise<User | undefined>;
}
