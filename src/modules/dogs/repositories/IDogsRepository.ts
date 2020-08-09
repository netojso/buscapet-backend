import Dog from '@modules/dogs/infra/typeorm/entities/Dog';
import ICreateDogDTO from '../dtos/ICreateDogDTO';

export default interface IDogsRepository {
  create(data: ICreateDogDTO): Promise<Dog>;
  findById(id: string): Promise<Dog>;
  findByBreed(breed: string): Promise<Dog>;
}
