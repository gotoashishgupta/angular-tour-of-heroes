import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PolymerModule } from '@codebakery/origami';
/**
 * @Optional: There are many collections to import, such as iron, paper, and gold elements
 */
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections'; // Optional

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({
  // array contains a list of application components, pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ]),

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
