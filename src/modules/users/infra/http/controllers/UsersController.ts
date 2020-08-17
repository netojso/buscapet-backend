import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ShowUserService from '@modules/users/services/ShowUserService';
import CreateUserService from '../../../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, whatsapp } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      whatsapp,
    });

    return response.json(classToClass(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute({
      user_id,
    });

    return response.json(classToClass(user));
  }
}
