export enum TransactionStatus {
  'success',
  'inProcess',
  'failed',
}
export enum ActionType {
  'decrease',
  'increase',
  'other',
}
export class TransactionHistory {
  constructor(
    private readonly user_id: string,
    public action: ActionType,
    public amount: number,
    public timestamp: Date,
    public status: TransactionStatus,
  ) {}
  getUserId() {
    return this.user_id;
  }
}
export interface TransactionRepository {
  create(transaction: TransactionHistory): Promise<void>;
}
