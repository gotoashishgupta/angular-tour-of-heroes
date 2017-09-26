import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PxComponentRoutingModule } from './px-components.routes.module';

import { PxComponent } from './px.component';
import { PxTabsComponent } from './px-tabs';
import { PxAppNavComponent } from './px-app-nav';
import { PxDatetimePickerComponent } from './px-datetime-picker';
import { PxTooltipComponent } from './px-tooltip';
import { PxDataTableComponent } from './px-data-table';


@NgModule({
  imports: [
    CommonModule,



    PxComponentRoutingModule
  ],
  declarations: [
    PxComponent,
    PxTabsComponent,
    PxAppNavComponent,
    PxDatetimePickerComponent,
    PxTooltipComponent,
    PxDataTableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PxComponentsModule { }
