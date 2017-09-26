import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PxComponent } from './px.component';
import { PxTabsComponent } from './px-tabs';


const routes: Routes = [
  {
    path: '', component: PxComponent,
    children: [
      { path: 'px-tabs', component: PxTabsComponent }
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
