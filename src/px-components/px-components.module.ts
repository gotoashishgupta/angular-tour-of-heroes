import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PolymerModule } from '@codebakery/origami';
/**
 * @Optional: There are many collections to import, such as iron, paper, and gold elements
 */
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';

import { PxComponentRoutingModule } from './px-components.routes.module';

import { PxComponent } from './px.component';
import { PxTabsComponent } from './px-tabs';
import { PxAppNavComponent } from './px-app-nav';
import { PxDatetimePickerComponent } from './px-datetime-picker';
import { PxTooltipComponent } from './px-tooltip';
import { PxDataTableComponent } from './px-data-table';
import { PxAccordionComponent } from './px-accordion';
import { PxAlertMessageComponent } from './px-alert-message';
import { PxBrandingBarComponent } from './px-branding-bar';
import { PxBreadcrumbsComponent } from './px-breadcrumbs';
import { PxClipboardComponent } from './px-clipboard';

@NgModule({
  imports: [
    CommonModule,


    PolymerModule,
    // Optional polymer modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule,

    PxComponentRoutingModule
  ],
  declarations: [
    PxComponent,
    PxTabsComponent,
    PxAppNavComponent,
    PxDatetimePickerComponent,
    PxTooltipComponent,
    PxDataTableComponent,
    PxAlertMessageComponent,
    PxBrandingBarComponent,
    PxBreadcrumbsComponent,
    PxClipboardComponent,
    PxAccordionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PxComponentsModule { }
