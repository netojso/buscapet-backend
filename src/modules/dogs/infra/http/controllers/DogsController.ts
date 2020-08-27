import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateNewDog from '@modules/dogs/services/CreateNewDog';
import UpdateDog from '@modules/dogs/services/UpdateDog';

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

    const photosParsed = photos.map((photoUrl: any) => {
      return {
        user_id,
        url: photoUrl,
      };
    });

    const dog = await createDogService.execute({
      breed,
      description,
      user_id,
      latitude,
      longitude,
      photos: photosParsed,
    });

    return response.json(classToClass(dog));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { user_id, breed, description, dog_id } = request.body;
    const photos = request.files;

    const updateDog = container.resolve(UpdateDog);

    const photosParsed = photos.map((photo: { filename: any }) => {
      return {
        url: photo.filename,
      };
    });

    const dog = await updateDog.execute({
      user_id,
      breed,
      description,
      dog_id,
      photos: photosParsed,
    });

    return response.json(dog);
  }
}
