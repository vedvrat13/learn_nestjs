import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService, CatService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
