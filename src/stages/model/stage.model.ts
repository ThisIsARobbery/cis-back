import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
class ConditionOption {
  @Prop()
  name: string;

  @Prop()
  stageRef: string; // TODO: add ref
}

@Schema()
export class Stage {
  /** Stage number */
  @Prop({ required: true })
  number: number;

  /** Stage title */
  @Prop({ required: true })
  title: string;

  /** Stage description */
  @Prop()
  description?: string;

  /** Actor */
  @Prop()
  actor: string; // TODO: add actors table and ref (maybe later)

  /** If stage has further condition */
  @Prop({ required: true, default: false })
  isConditional: boolean;

  /** Stage options (if isConditional) */
  @Prop()
  options?: ConditionOption[];

  /** Stage priority */
  @Prop({
    enum: ['low', 'medium', 'high'],
  })
  priority: string; // TODO: add enum
}

/** Stage Schema */
export const StageSchema = SchemaFactory.createForClass(Stage);

/** Stage mongoose document */
export type StageDocument = Stage & mongoose.Document;

/** Stage mongoose lean document */
export type TStageDocument = mongoose.LeanDocument<StageDocument>;
