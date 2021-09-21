import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  CreateStageResultDto,
  UpdateStageResultDto,
} from './model/stage-result.dto';
import { StageResult, TStageResultDocument } from './model/stage-result.model';

@Injectable()
export class StageResultsService {
  constructor(
    @InjectModel(StageResult.name)
    private readonly stageResultModel: Model<StageResult>,
  ) {}

  async findAll(): Promise<TStageResultDocument[]> {
    return this.stageResultModel.find().lean();
  }

  async create(
    createStageResultDto: CreateStageResultDto,
  ): Promise<TStageResultDocument> {
    return this.stageResultModel.create(createStageResultDto);
  }

  async update(
    stageResultId: string,
    updateStageResultDto: UpdateStageResultDto,
  ): Promise<TStageResultDocument> {
    return this.stageResultModel.findByIdAndUpdate(
      stageResultId,
      updateStageResultDto,
      {
        new: true,
      },
    );
  }

  async delete(stageResultId: string): Promise<TStageResultDocument> {
    return this.stageResultModel.findByIdAndDelete(stageResultId);
  }

  async getPopulated(stageResultId: string): Promise<TStageResultDocument> {
    return this.stageResultModel
      .findOne({ _id: stageResultId })
      .populate('project')
      .populate('stage');
  }

  async getProjectStageResult(
    projectId: string,
  ): Promise<TStageResultDocument[]> {
    return this.stageResultModel
      .find({
        project: projectId,
      } as FilterQuery<TStageResultDocument>)
      .populate('stage');
  }
}
