import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  {
    path: 'styleguide', component: HeroesComponent,
    children: [
      { path: 'buttons', component: DashboardComponent },
      { path: 'typography', component: DashboardComponent }
    ]
  },
  { path: 'styleguide/color-palette', component: DashboardComponent },
  { path: 'styleguide/flexbox-grid', component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true  // <-- debugging purposes only
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
