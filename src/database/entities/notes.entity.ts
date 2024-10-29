import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  TaskId: number;
}
