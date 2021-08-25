import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Project } from '../../projects/model/project.model';
import { Stage } from '../../stages/model/stage.model';

@Schema()
export class StageResult {
  /** Corresponding stage object */
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Stage', required: true })
  stage: Stage;

  /** Stage is done */
  @Prop({ default: false })
  isDone: boolean;

  /** Attached file  */
  @Prop()
  file: string; // TODO: do the files!

  /** Note on completed stage */
  @Prop()
  note: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  })
  project: Project;
}

/** Stage result schema */
export const StageResultSchema = SchemaFactory.createForClass(StageResult);

/** Stage result mongoose document */
export type StageResultDocument = StageResult & mongoose.Document;

/** Stage result mongoose lean document */
export type TStageResultDocument = mongoose.LeanDocument<StageResultDocument>;
