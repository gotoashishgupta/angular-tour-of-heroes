import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '', component: PxComponent,
    children: [
      { path: 'px-accordion', component: PxAccordionComponent },
      { path: 'px-tabs', component: PxTabsComponent },
      { path: 'px-app-nav', component: PxAppNavComponent },
      { path: 'px-datetime-picker', component: PxDatetimePickerComponent },
      { path: 'px-datatable', component: PxDataTableComponent },
      { path: 'px-alert-message', component: PxAlertMessageComponent },
      { path: 'px-tooltip', component: PxTooltipComponent },
      { path: 'px-branding-bar', component: PxBrandingBarComponent },
      { path: 'px-breadcrumbs', component: PxBreadcrumbsComponent }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PxComponentRoutingModule { }
