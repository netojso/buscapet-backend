import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from 'typeorm';

import Dog from '@modules/dogs/infra/typeorm/entities/Dog';
import Photo from '@modules/dogs/infra/typeorm/entities/Photo';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  whatsapp: number;

  @OneToMany(() => Dog, dogs => dogs.user, { eager: true })
  dogs: Dog[];

  @OneToMany(() => Photo, photos => photos.user, { eager: true })
  photos: Photo[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
