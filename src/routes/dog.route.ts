import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateDogService from '../services/CreateNewDog';
import Dog from '../models/Dog';

const dogRouter = Router();

dogRouter.get('/', (req, res) => {
  const dogsRepo = getRepository(Dog);

  const allDogs = dogsRepo.find();

  return res.json(allDogs);
});

dogRouter.post('/', async (req, res) => {
  const { breed, location, date } = req.body;
  const photos: never[] = [];

  const dog = await new CreateDogService().execute({
    breed,
    photos,
    location,
    date,
  });

  return res.json(dog);
});

export default dogRouter;
