import { Module } from '@nestjs/common';
import { UserPurchaseController } from '../infrastructure/controller/user-purchase.controller';
import { UserTypeOrmService } from '../infrastructure/service/user.typeorm.service';
import { DecreaseItemUseCase } from '../application/decrease-item.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../infrastructure/models/user.typeorm.model';

@Module({
  controllers: [UserPurchaseController],
  providers: [
    DecreaseItemUseCase,
    {
      provide: 'UserRepository',
      useClass: UserTypeOrmService,
    },
  ],
  imports: [TypeOrmModule.forFeature([UserModel])],
  exports: [],
})
export class UserModule {}
