export class UserEntity {
  constructor(
    private readonly id: string,
    private balance: number,
  ) {}
  getUserId() {
    return this.id;
  }
  getUserBalance() {
    return this.balance;
  }
  increaseBalance(amount: number) {
    this.balance += amount;
  }
  decreaseBalance(amount: number) {
    if (this.balance < amount) {
      throw new Error('недостаточно средств!');
    }
    this.balance -= amount;
  }
}
export interface UserRepository {
  findById(id: string): Promise<UserEntity | null>;
  save(user: UserEntity): Promise<void>;
}
