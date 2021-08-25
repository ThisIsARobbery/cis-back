import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Project {
  /** Project name */
  @Prop({ required: true })
  name: string;

  /** Project description */
  @Prop()
  description?: string;

  /** Current stage number */
  @Prop({ required: true })
  currentStageNumber: number;
}

/** Project Schema */
export const ProjectSchema = SchemaFactory.createForClass(Project);

/** Project mongoose document */
export type ProjectDocument = Project & mongoose.Document;

/** Project mongoose lean document */
export type TProjectDocument = mongoose.LeanDocument<ProjectDocument>;
