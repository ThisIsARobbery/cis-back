import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStageDto, UpdateStageDto } from './model/stage.dto';
import { Stage, StageDocument, TStageDocument } from './model/stage.model';

@Injectable()
export class StagesService {
  constructor(
    @InjectModel(Stage.name) private stagesModel: Model<StageDocument>,
  ) {}

  async findAll(): Promise<TStageDocument[]> {
    return this.stagesModel.find().lean();
  }

  async create(createStageDto: CreateStageDto): Promise<TStageDocument> {
    return this.stagesModel.create(createStageDto);
  }

  async update(
    stageId: string,
    updateStageDto: UpdateStageDto,
  ): Promise<TStageDocument> {
    return this.stagesModel.findByIdAndUpdate(stageId, updateStageDto, {
      new: true,
    });
  }

  async delete(stageId: string): Promise<TStageDocument> {
    return this.stagesModel.findByIdAndDelete(stageId);
  }

  async getNextStage(currentIndex: number): Promise<TStageDocument | null> {
    const nextStage = await this.stagesModel.findOne({
      number: currentIndex + 1,
    });
    if (!nextStage) return null;
    return nextStage;
  }

  async getStageById(stageId: string): Promise<TStageDocument> {
    return this.stagesModel.findOne({ _id: stageId });
  }
}
