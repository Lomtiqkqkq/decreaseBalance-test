import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../core/entity/user.entity';
import {
  ActionType,
  TransactionHistory,
  TransactionRepository,
  TransactionStatus,
} from '../core/entity/transaction-history.entity';

@Injectable()
export class DecreaseItemUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepo: UserRepository,
    @Inject('TransactionRepository')
    private readonly transactionRepo: TransactionRepository,
  ) {}
  async execute(userId: string, amount: number): Promise<{ message: string }> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      const transactionFail = new TransactionHistory(
        '',
        ActionType.other,
        amount,
        new Date(),
        TransactionStatus.failed,
      );
      await this.transactionRepo.create(transactionFail);
      throw new Error('неверный user_id');
    }
    user.decreaseBalance(amount);
    const transaction = new TransactionHistory(
      userId,
      ActionType.decrease,
      amount,
      new Date(),
      TransactionStatus.success,
    );
    await this.userRepo.save(user);
    await this.transactionRepo.create(transaction);
    return { message: 'success decrease' };
  }
}
