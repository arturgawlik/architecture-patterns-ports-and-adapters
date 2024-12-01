import { Alarm } from '../alarm';
import { randomUUID } from 'node:crypto';
import { AlarmSeverity } from '../value-objects/alarm-serverity';

export class AlarmFactory {
  create(name: string, serverity: string) {
    const id = randomUUID();
    const alarmSeverity = new AlarmSeverity(serverity);
    return new Alarm(id, name, alarmSeverity);
  }
}
