import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class DecreaseBalanceDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;
}
