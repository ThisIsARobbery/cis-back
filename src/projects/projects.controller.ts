import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProjectDto, UpdateProjectDto } from './model/project.dto';
import { TProjectDocument } from './model/project.model';
import { ProjectsService } from './projects.service';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(): Promise<TProjectDocument[]> {
    return this.projectsService.findAll();
  }

  @Post()
  async create(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<TProjectDocument> {
    return this.projectsService.create(createProjectDto);
  }

  @Put('/:id')
  async update(
    @Param('id') projectId: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<TProjectDocument> {
    return this.projectsService.update(projectId, updateProjectDto);
  }

  @Delete('/:id')
  async delete(@Param('id') projectId: string): Promise<TProjectDocument> {
    return this.projectsService.delete(projectId);
  }
}
