import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PxComponent } from './px.component';
import { PxTabsComponent } from './px-tabs';
import { PxAppNavComponent } from './px-app-nav';
import { PxDatetimePickerComponent } from './px-datetime-picker';
import { PxTooltipComponent } from './px-tooltip';
import { PxDataTableComponent } from './px-data-table';


const routes: Routes = [
  {
    path: '', component: PxComponent,
    children: [
      { path: 'px-tabs', component: PxTabsComponent },
      { path: 'px-app-nav', component: PxAppNavComponent },
      { path: 'px-datetime-picker', component: PxDatetimePickerComponent },
      { path: 'px-datatable', component: PxDataTableComponent },
      { path: 'px-tooltip', component: PxTooltipComponent }
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
