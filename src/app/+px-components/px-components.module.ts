import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PxComponentRoutingModule } from './px-components.routes.module';

import { PxComponent } from './px.component';
import { PxTabsComponent } from './px-tabs';


@NgModule({
  imports: [
    CommonModule,



    PxComponentRoutingModule
  ],
  declarations: [
    PxComponent,
    PxTabsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PxComponentsModule { }
