import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateStageResultDto,
  UpdateStageResultDto,
} from './model/stage-result.dto';
import { TStageResultDocument } from './model/stage-result.model';
import { StageResultsService } from './stage-results.service';

@Controller('stage_results')
export class StageResultsController {
  constructor(private stageResultsService: StageResultsService) {}

  @Get()
  async getAll(): Promise<TStageResultDocument[]> {
    return this.stageResultsService.findAll();
  }

  @Post()
  async create(
    @Body() createStageResultDto: CreateStageResultDto,
  ): Promise<TStageResultDocument> {
    return this.stageResultsService.create(createStageResultDto);
  }

  @Put('/:id')
  async update(
    @Param('id') stageResultId: string,
    @Body() updateStageResultDto: UpdateStageResultDto,
  ): Promise<TStageResultDocument> {
    return this.stageResultsService.update(stageResultId, updateStageResultDto);
  }

  @Delete('/:id')
  async delete(
    @Param('id') stageResultId: string,
  ): Promise<TStageResultDocument> {
    return this.stageResultsService.delete(stageResultId);
  }

  @Get('/populated/:id')
  async getPopulated(
    @Param('id') stageResultId: string,
  ): Promise<TStageResultDocument> {
    return this.stageResultsService.getPopulated(stageResultId);
  }

  @Get('/project/:projectId')
  async getStageResultsByProject(
    @Param('projectId') projectId: string,
  ): Promise<TStageResultDocument[]> {
    return this.stageResultsService.getProjectStageResult(projectId);
  }
}
