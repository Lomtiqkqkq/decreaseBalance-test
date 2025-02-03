import { Module } from '@nestjs/common';
import { TransactionTypeormService } from '../infrastructure/service/transaction.typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModel } from '../infrastructure/models/transaction.typeorm.model';

@Module({
  controllers: [],
  providers: [
    {
      provide: 'TransactionRepository',
      useClass: TransactionTypeormService,
    },
  ],
  imports: [TypeOrmModule.forFeature([TransactionModel])],
  exports: [],
})
export class TransactionModule {}
