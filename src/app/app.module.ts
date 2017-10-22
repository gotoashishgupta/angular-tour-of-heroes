import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// in memory api stub
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { PolymerModule } from '@codebakery/origami';
/**
 * @Optional: There are many collections to import, such as iron, paper, and gold elements
 */
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections'; // Optional

import { SharedModule } from './shared';
import { AppRoutingModule } from './app.routes.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './shared/services/hero.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { SideMenuComponent } from './app-side-menu';
import { DemoPxDatatableComponent } from './demo-px-datatable';

@NgModule({
  // array contains a list of application components, pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    DemoPxDatatableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule.withServerTransition({appId: 'anyRandomStringUnique4ThisPageId'}),
    FormsModule,
    HttpModule,

    SharedModule.forRoot(),

    // mock data service
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutingModule,

    PolymerModule.forRoot(),
    // Optional polymer modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
