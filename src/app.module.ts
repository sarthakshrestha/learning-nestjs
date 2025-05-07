import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [EpisodesModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
