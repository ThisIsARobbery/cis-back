import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Stage } from './stage.model';

@Schema()
export class ConditionOption {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Stage', required: true })
  stageRef: Stage;
}
