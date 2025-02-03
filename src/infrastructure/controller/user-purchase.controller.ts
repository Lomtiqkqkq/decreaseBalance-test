import { Body, Controller, Post } from '@nestjs/common';
import { DecreaseItemUseCase } from '../../application/decrease-item.use-case';
import { DecreaseBalanceDto } from '../dto/decreaseBalance.dto';

@Controller('/decrease')
export class UserPurchaseController {
  constructor(private readonly decreaseItemUseCase: DecreaseItemUseCase) {}
  @Post('')
  async createPurchase(@Body() decreaseDto: DecreaseBalanceDto) {
    const transaction = await this.decreaseItemUseCase.execute(
      decreaseDto.user_id,
      decreaseDto.amount,
    );
    return transaction.message;
  }
}
