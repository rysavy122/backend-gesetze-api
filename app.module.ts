import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GesetzeController } from './gesetze/gesetze.controller';
import { GesetzeService } from './gesetze/gesetze.service';

@Module({
  imports: [],
  controllers: [AppController, GesetzeController],
  providers: [AppService, GesetzeService],
})
export class AppModule {}
