import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  ActionType,
  TransactionStatus,
} from '../../core/entity/transaction-history.entity';

@Entity({ name: 'Transaction' })
export class TransactionModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'string', name: 'user_id', nullable: true })
  userId: string;
  @Column({ type: 'string', nullable: true })
  action: ActionType;
  @Column({ type: 'int', name: 'amount_order_price', nullable: true })
  amount: number;
  @Column({ type: 'datetime', name: 'created_at', nullable: false })
  timestamp: Date;
  @Column()
  status: TransactionStatus;
}
