import { Injectable } from '@nestjs/common';
import { AlarmEntity } from '../entities/alarm.entity';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmMapper } from '../mappers/alarm.mapper';

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  private alarms: Map<string, AlarmEntity> = new Map();

  async findAll(): Promise<Alarm[]> {
    const entity = Array.from(this.alarms.values());
    return entity.map((alarm) => {
      return AlarmMapper.toDomain(alarm);
    });
  }

  async save(alarm: Alarm): Promise<Alarm> {
    this.alarms.set(alarm.id, AlarmMapper.toPersistence(alarm));
    return alarm;
  }
}
