import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Tasks',
      entities: [],
      synchronize: true,
    }),
    TasksModule,
    AuthModule
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
