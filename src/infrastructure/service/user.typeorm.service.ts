import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../models/user.typeorm.model';
import { UserEntity, UserRepository } from '../../core/entity/user.entity';

@Injectable()
export class UserTypeOrmService implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  async save(user: UserEntity): Promise<void> {
    const ormUser = this.toOrmEntity(user);
    await this.userRepository.save(ormUser);
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return user ? this.toDomainEntity(user) : null;
  }
  private toDomainEntity(ormUser: UserModel): UserEntity {
    return new UserEntity(ormUser.id, ormUser.balance);
  }
  private toOrmEntity(domainUser: UserEntity): UserModel {
    const ormUser = new UserModel();
    ormUser.id = domainUser.getUserId();
    ormUser.balance = domainUser.getUserBalance();
    return ormUser;
  }
}
