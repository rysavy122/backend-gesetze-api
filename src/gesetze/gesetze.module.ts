import { Module } from '@nestjs/common';

import { GesetzeController } from './gesetze.controller';
import { GesetzeService } from './gesetze.service';

@Module({
  imports: [],
  controllers: [GesetzeController],
  providers: [GesetzeService],
})
export class GesetzeModule {}
