import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AboutUsController } from './aboutus/aboutus.controller'

@Module({
  imports: [],
  controllers: [AppController, AboutUsController],
  providers: [AppService],
})
export class AppModule {}
