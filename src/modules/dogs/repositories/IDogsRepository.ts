import Dog from '@modules/dogs/infra/typeorm/entities/Dog';
import ICreateDogDTO from '../dtos/ICreateDogDTO';

export default interface IDogsRepository {
  findById(id: string): Promise<Dog | undefined>;
  findByUserId(user_id: string): Promise<Dog[] | undefined>;
  findByBreed(breed: string): Promise<Dog[] | undefined>;
  create(data: ICreateDogDTO): Promise<Dog>;
}
