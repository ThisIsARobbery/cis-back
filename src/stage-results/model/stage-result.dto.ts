import { TStageResultDocument } from './stage-result.model';

export interface CreateStageResultDto
  extends Omit<TStageResultDocument, '_id' | 'createdAt' | 'updatedAt'> {}

export interface UpdateStageResultDto extends Partial<CreateStageResultDto> {}
