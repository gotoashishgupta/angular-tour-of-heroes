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
import { PxClipboardComponent } from './px-clipboard';

const routes: Routes = [
  {
    path: '', component: PxComponent,
    children: [
      { path: 'px-accordion', component: PxAccordionComponent, data: { title: 'Px Accordion' } },
      { path: 'px-tabs', component: PxTabsComponent, data: { title: 'Px Tabs' } },
      { path: 'px-app-nav', component: PxAppNavComponent, data: { title: 'Px App Nav' } },
      { path: 'px-clipboard', component: PxClipboardComponent, data: { title: 'Px Clipboard' } },
      { path: 'px-datetime-picker', component: PxDatetimePickerComponent, data: { title: 'Px Datetime Picker' } },
      { path: 'px-datatable', component: PxDataTableComponent, data: { title: 'Px Datatable' } },
      { path: 'px-alert-message', component: PxAlertMessageComponent, data: { title: 'Px Alert Message' } },
      { path: 'px-tooltip', component: PxTooltipComponent, data: { title: 'Px Tooltip' } },
      { path: 'px-branding-bar', component: PxBrandingBarComponent, data: { title: 'Px Branding Bar' } },
      { path: 'px-breadcrumbs', component: PxBreadcrumbsComponent, data: { title: 'Px Breadcrumbs' } }

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
