import { AlarmSeverity } from './value-objects/alarm-serverity';

export class Alarm {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly serverity: AlarmSeverity,
  ) {}
}
