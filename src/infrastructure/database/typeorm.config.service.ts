import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
@Injectable()
export class TypeOrmConfigService implements TypeOrmConfigService {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const configService = new ConfigService();
    return {
      type: 'postgres',
      host: configService.get<string>('TYPEORM_HOST'),
      port: configService.get<number>('TYPEORM_PORT'),
      username: configService.get<string>('TYPEORM_USERNAME'),
      password: configService.get<string>('TYPEORM_PASSWORD'),
      database: configService.get<string>('TYPEORM_DATABASE'),
      synchronize: true,
      autoLoadEntities: true,
      entities: [__dirname + '../models/*.typeorm.model.js'],
    };
  }
}
