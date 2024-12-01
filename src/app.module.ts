import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOptions } from './common/application-bootstrap-options.interface';
import { AlarmsModule } from './alarms/application/alarms.module';
import { AlarmsInfrastructureModule } from './alarms/infrastructure/alarms-infrstracture.module';

@Module({
  imports: [CoreModule],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInsfrastructure(
          AlarmsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
