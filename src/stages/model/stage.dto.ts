import { TStageDocument } from './stage.model';

/** Create stage DTO */
export interface CreateStageDto
  extends Omit<TStageDocument, '_id' | 'createdAt' | 'updatedAt'> {}

/** Update stage DTO */
export interface UpdateStageDto extends Partial<CreateStageDto> {}
