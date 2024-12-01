import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { AlarmsController } from '../presenters/http/alarms.controller';
import { AlarmFactory } from '../domain/factories/alarm.factory';

@Module({
  providers: [AlarmsService, AlarmFactory],
  controllers: [AlarmsController],
})
export class AlarmsModule {
  static withInsfrastructure(infrastructure: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructure],
    };
  }
}
