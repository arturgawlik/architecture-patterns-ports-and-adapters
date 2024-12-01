import { Module } from '@nestjs/common';
import { OrmAlarmRepository } from './repositories/alarm.repository';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmEntity } from './entities/alarm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity])],
  providers: [
    {
      provide: AlarmRepository,
      useClass: OrmAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class OrmPersistanceModule {}
