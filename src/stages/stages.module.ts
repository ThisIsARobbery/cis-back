import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Stage, StageSchema } from './model/stage.model';
import { StagesController } from './stages.controller';
import { StagesService } from './stages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stage.name, schema: StageSchema }]),
  ],
  controllers: [StagesController],
  providers: [StagesService],
})
export class StagesModule {}
