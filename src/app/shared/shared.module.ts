import { NgModule, ModuleWithProviders } from '@angular/core';
import { HeroService } from './services/hero.service';

@NgModule({})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HeroService]
    };
  }
}
