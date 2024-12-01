import { AlarmsService } from 'src/alarms/application/alarms.service';
import { Post, Body, Get, Controller } from '@nestjs/common';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { CreateAlarmCommand } from 'src/alarms/application/commands/create-alarm.command';

@Controller('alarms')
export class AlarmsController {
  constructor(private alarmsService: AlarmsService) {}

  @Post()
  async create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.serverity),
    );
  }

  @Get()
  async findAll() {
    return await this.alarmsService.findAll();
  }
}
