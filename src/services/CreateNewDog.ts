/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import Dog from '../models/Dog';

interface Request {
  breed: string;
  photos: never[];
  location: { longitude: number; latitude: number };
  date: Date;
}

class CreateNewDog {
  public async execute({
    breed,
    photos,
    location,
    date,
  }: Request): Promise<Dog> {
    const DogRepository = getRepository(Dog);

    const checkDogExists = await DogRepository.findOne({
      where: { breed, location },
    });

    if (checkDogExists) {
      throw new Error('Esse pet já existe');
    }

    const dog = DogRepository.create({
      breed,
      photos,
      location,
      date,
    });

    await DogRepository.save(dog);

    return dog;
  }
}

export default CreateNewDog;
