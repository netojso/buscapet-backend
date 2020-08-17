import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';
import Photo from './Photo';

@Entity('dogs')
class Dog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  breed: string;

  @Column('varchar')
  description: string;

  @Column('int')
  longitude: number;

  @Column('int')
  latitude: number;

  @ManyToOne(() => User, user => user.dogs)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Photo, photo => photo.dog, { eager: true, cascade: true })
  photos: Photo[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Dog;
