import { InMemoryPersistanceModule } from './persistance/in-memory/in-memory-persistance.module';
import { OrmPersistanceModule } from './persistance/orm/orm-persistance.module';

export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const presistanceModule =
      driver === 'orm' ? OrmPersistanceModule : InMemoryPersistanceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [presistanceModule],
      exports: [presistanceModule],
    };
  }
}
