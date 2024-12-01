import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlarmEntity } from '../entities/alarm.entity';
import { Repository } from 'typeorm';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmMapper } from '../mappers/alarm.mapper';

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    const entity = await this.alarmRepository.find();
    return entity.map((alarm) => {
      return AlarmMapper.toDomain(alarm);
    });
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const entity = await this.alarmRepository.save(
      AlarmMapper.toPersistence(alarm),
    );
    return AlarmMapper.toDomain(entity);
  }
}
