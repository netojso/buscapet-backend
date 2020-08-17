import { getRepository, Repository } from 'typeorm';

import IDogsRepository from '@modules/dogs/repositories/IDogsRepository';
import ICreateDogDTO from '@modules/dogs/dtos/ICreateDogDTO';
import Dog from '../entities/Dog';

class DogsRepository implements IDogsRepository {
  private ormRepository: Repository<Dog>;

  constructor() {
    this.ormRepository = getRepository(Dog);
  }

  public async findById(id: string): Promise<Dog | undefined> {
    const dog = await this.ormRepository.findOne(id);

    return dog;
  }

  public async findByBreed(breed: string): Promise<Dog[] | undefined> {
    const dogs = await this.ormRepository.find({
      where: breed,
    });

    return dogs;
  }

  public async findByUserId(user_id: string): Promise<Dog[] | undefined> {
    const dogs = await this.ormRepository.find({
      where: { user_id },
    });

    return dogs;
  }

  public async create({
    breed,
    description,
    user_id,
    latitude,
    longitude,
    photos,
  }: ICreateDogDTO): Promise<Dog> {
    const dog = this.ormRepository.create({
      breed,
      description,
      user_id,
      latitude,
      longitude,
      photos,
    });
    await this.ormRepository.save(dog);

    return dog;
  }

  public async save(dog: Dog): Promise<Dog> {
    const newDog = await this.ormRepository.save(dog);

    return newDog;
  }
}

export default DogsRepository;
