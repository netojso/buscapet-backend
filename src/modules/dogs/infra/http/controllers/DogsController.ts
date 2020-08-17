import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateNewDog from '@modules/dogs/services/CreateNewDog';

export default class DogsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      breed,
      description,
      user_id,
      latitude,
      longitude,
      photos,
    } = request.body;

    const createDogService = container.resolve(CreateNewDog);

    const dog = await createDogService.execute({
      breed,
      description,
      user_id,
      latitude,
      longitude,
      photos,
    });

    return response.json(classToClass(dog));
  }
}
