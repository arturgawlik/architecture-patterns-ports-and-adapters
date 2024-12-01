import { Module } from '@nestjs/common';
import { OrmAlarmRepository } from './repositories/alarm.repository';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';

@Module({
  providers: [
    {
      provide: AlarmRepository,
      useClass: OrmAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class InMemoryPersistanceModule {}
