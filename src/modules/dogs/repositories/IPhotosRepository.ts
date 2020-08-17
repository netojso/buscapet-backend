import Photo from '../infra/typeorm/entities/Photo';
import ICreatePhotoDTO from '../dtos/ICreatePhotoDTO';

export default interface IPhotosRepository {
  create(data: ICreatePhotoDTO): Promise<Photo>;
  updatePhotos(photo: Photo): Promise<Photo>;
  findByUserId(user_id: string): Promise<Photo[] | undefined>;
  findByDogId(dog_id: string): Promise<Photo[] | undefined>;
}
