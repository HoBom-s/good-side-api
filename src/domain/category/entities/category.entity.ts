import { BaseTimeStampEntity } from 'src/common/base-time-stamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category extends BaseTimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  path: string;

  @Column()
  sortIdx: number;
}
