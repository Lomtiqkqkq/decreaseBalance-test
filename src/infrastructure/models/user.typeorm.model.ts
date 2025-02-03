import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: string;
  @Column({ type: 'int', name: 'balance', nullable: true, default: 0 })
  balance: number;
}
