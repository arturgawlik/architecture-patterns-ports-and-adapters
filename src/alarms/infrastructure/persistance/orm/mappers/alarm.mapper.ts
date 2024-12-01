import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmSeverity } from 'src/alarms/domain/value-objects/alarm-serverity';

export class AlarmMapper {
  static toDomain(entity: AlarmEntity): Alarm {
    const serverity = new AlarmSeverity(entity.serverity);
    return new Alarm(entity.id, entity.name, serverity);
  }

  static toPersistence(domain: Alarm): AlarmEntity {
    const entity = new AlarmEntity();
    entity.id = domain.id;
    entity.name = domain.name;
    entity.serverity = domain.serverity.value;
    return entity;
  }
}

// function instantiateAndAssignProperties<T extends { prototype: object }>(
//   klass: T,
//   properties: Partial<T>,
// ): T {
//   return Object.assign(Object.create(klass.prototype), properties);
// }
