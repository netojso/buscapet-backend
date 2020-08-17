import { getRepository, Repository } from 'typeorm';

import IPhotosRepository from '@modules/dogs/repositories/IPhotosRepository';
import ICreatePhotoDTO from '@modules/dogs/dtos/ICreatePhotoDTO';
import Photo from '../entities/Photo';

class PhotosRepository implements IPhotosRepository {
  private ormRepository: Repository<Photo>;

  constructor() {
    this.ormRepository = getRepository(Photo);
  }

  public async findByUserId(user_id: string): Promise<Photo[] | undefined> {
    const photos = await this.ormRepository.find({
      where: { user_id },
    });

    return photos;
  }

  public async findByDogId(dog_id: string): Promise<Photo[] | undefined> {
    const photos = await this.ormRepository.find({
      where: dog_id,
    });

    return photos;
  }

  public async create({
    dog_id,
    user_id,
    url,
  }: ICreatePhotoDTO): Promise<Photo> {
    const photo = this.ormRepository.create({
      user_id,
      dog_id,
      url,
    });

    await this.ormRepository.save(photo);

    return photo;
  }

  public async updatePhotos(photo: Photo): Promise<Photo> {
    const newPhotos = await this.ormRepository.save(photo);

    return newPhotos;
  }
}

export default PhotosRepository;
