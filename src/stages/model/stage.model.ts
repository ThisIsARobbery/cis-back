import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ConditionOption } from './condition-option.schema';
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
  @Prop({ default: [], type: [SchemaFactory.createForClass(ConditionOption)] })
  options?: ConditionOption[];

  /** Stage priority */
  @Prop({
    enum: ['low', 'medium', 'high'],
  })
  priority: string;
}

/** Stage Schema */
export const StageSchema = SchemaFactory.createForClass(Stage);

/** Stage mongoose document */
export type StageDocument = Stage & mongoose.Document;

/** Stage mongoose lean document */
export type TStageDocument = mongoose.LeanDocument<StageDocument>;
