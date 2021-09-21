import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StagesModule } from './stages/stages.module';
import { ProjectsModule } from './projects/projects.module';
import { StageResultsModule } from './stage-results/stage-results.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    StagesModule,
    ProjectsModule,
    StageResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
