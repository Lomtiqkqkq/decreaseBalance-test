import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionModel } from '../models/transaction.typeorm.model';
import { Repository } from 'typeorm';
import {
  TransactionHistory,
  TransactionRepository,
} from '../../core/entity/transaction-history.entity';

@Injectable()
export class TransactionTypeormService implements TransactionRepository {
  constructor(
    @InjectRepository(TransactionModel)
    private readonly transactionRepository: Repository<TransactionModel>,
  ) {}

  async create(transaction: TransactionHistory): Promise<void> {
    const toOrm = this.toOrm(transaction);
    await this.transactionRepository.save(toOrm);
  }
  private toOrm(transaction: TransactionHistory): TransactionModel {
    const orm = new TransactionModel();
    orm.userId = transaction.getUserId();
    orm.action = transaction.action;
    orm.amount = transaction.amount;
    orm.status = transaction.status;
    orm.timestamp = transaction.timestamp;
    return orm;
  }
  private toDomain(transaction: TransactionModel): TransactionHistory {
    return new TransactionHistory(
      transaction.userId,
      transaction.action,
      transaction.amount,
      transaction.timestamp,
      transaction.status,
    );
  }
}
