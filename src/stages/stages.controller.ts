import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStageDto, UpdateStageDto } from './model/stage.dto';
import { TStageDocument } from './model/stage.model';
import { StagesService } from './stages.service';

@Controller('stages')
export class StagesController {
  constructor(private readonly stagesService: StagesService) {}

  @Get()
  async getAll(): Promise<TStageDocument[]> {
    return this.stagesService.findAll();
  }

  @Post()
  async create(
    @Body() createStageDto: CreateStageDto,
  ): Promise<TStageDocument> {
    return this.stagesService.create(createStageDto);
  }

  @Put('/:id')
  async update(
    @Param('id') stageId: string,
    @Body() updateStageDto: UpdateStageDto,
  ): Promise<TStageDocument> {
    return this.stagesService.update(stageId, updateStageDto);
  }

  @Delete('/:id')
  async delete(@Param('id') stageId: string): Promise<any> {
    return this.stagesService.delete(stageId);
  }
}
