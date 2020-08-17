interface IPhoto {
  user_id: string;
  url: string;
}

export default interface ICreateDogDTO {
  breed: string;
  description: string;
  user_id: string;
  longitude: number;
  latitude: number;
  photos: IPhoto[];
}
