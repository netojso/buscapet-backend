import { uuid } from 'uuidv4';

class Dog {
  id: string;

  breed: string;

  photos: never[];

  location: { longitude: number; latitude: number };

  date: Date;

  constructor({ breed, photos, location, date }: Omit<Dog, 'id'>) {
    this.id = uuid();
    this.breed = breed;
    this.photos = photos;
    this.location = location;
    this.date = date;
  }
}

export default Dog;
