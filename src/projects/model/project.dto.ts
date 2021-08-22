import { TProjectDocument } from './project.model';

export interface CreateProjectDto
  extends Omit<TProjectDocument, '_id' | 'createdAt' | 'updatedAt'> {}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}
