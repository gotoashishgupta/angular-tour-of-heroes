import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PolymerModule } from '@codebakery/origami';
/**
 * @Optional: There are many collections to import, such as iron, paper, and gold elements
 */
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections'; // Optional

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  // array contains a list of application components, pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,

    PolymerModule.forRoot(),
    // Optional polymer modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
