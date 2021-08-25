import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto, UpdateProjectDto } from './model/project.dto';
import { Project, TProjectDocument } from './model/project.model';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectsModel: Model<Project>,
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
    return this.projectsModel.findByIdAndDelete(projectId);
  }
}
