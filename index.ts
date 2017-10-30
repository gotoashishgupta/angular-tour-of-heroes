import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrayskullComponentsModule } from '@Grayskull/app';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// in memory api stub
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './src/app/in-memory-data.service';

import { PolymerModule } from '@codebakery/origami';
/**
 * @Optional: There are many collections to import, such as iron, paper, and gold elements
 */
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections'; // Optional

import { IS_GRAYSKULL } from './src/app/injection-tokens';
import { SharedModule } from './src/app/shared';
import { GrayskullAppRoutingModule } from './src/app/grayskull-app.routes.module';

import { AppComponent } from './src/app/app.component';

import { HeroDetailComponent } from './src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from './src/app/heroes/heroes.component';
import { HeroService } from './src/app/shared/services/hero.service';

import { DashboardComponent } from './src/app/dashboard/dashboard.component';
import { HeroSearchComponent } from './src/app/hero-search/hero-search.component';

import { SideMenuComponent } from './src/app/app-side-menu';


import { UniversalInterceptor } from './src/app/app.universal.interceptor';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,

    // SharedModule.forRoot(),

    // mock data service
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    GrayskullAppRoutingModule,

    PolymerModule,
    // Optional polymer modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule,

    CommonModule,
    GrayskullComponentsModule
  ],
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      /* Multi is important or you will delete all the other interceptors */
      multi: true
    },
    HeroService,
    {
      provide: IS_GRAYSKULL,
      useValue: true
    }
  ]
})
export class GrayskullAppModule { }
