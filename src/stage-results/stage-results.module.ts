import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StageResult, StageResultSchema } from './model/stage-result.model';
import { StageResultsController } from './stage-results.controller';
import { StageResultsService } from './stage-results.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StageResult.name, schema: StageResultSchema },
    ]),
  ],
  controllers: [StageResultsController],
  providers: [StageResultsService],
})
export class StageResultsModule {}
