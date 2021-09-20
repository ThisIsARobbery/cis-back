import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { StageResult } from '../stage-results/model/stage-result.model';
import { CreateProjectDto, UpdateProjectDto } from './model/project.dto';
import { Project, TProjectDocument } from './model/project.model';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectsModel: Model<Project>,
    @InjectModel(StageResult.name)
    private readonly stageResultModel: Model<StageResult>,
  ) {}

  async findAll(): Promise<TProjectDocument[]> {
    return this.projectsModel.find().lean();
  }

  async create(createProjectDto: CreateProjectDto): Promise<TProjectDocument> {
    return this.projectsModel.create(createProjectDto);
  }

  async update(
    projectId: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<TProjectDocument> {
    return this.projectsModel.findByIdAndUpdate(projectId, updateProjectDto, {
      new: true,
    });
  }

  async delete(projectId: string): Promise<TProjectDocument> {
    await this.stageResultModel.deleteMany({
      project: projectId,
    } as FilterQuery<StageResult>);
    return this.projectsModel.findByIdAndDelete(projectId);
  }
}
