import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'px-components', loadChildren: './+px-components/index#PxComponentsModule' },
  {
    path: 'styleguide', component: HeroesComponent,
    children: [
      { path: 'buttons', component: DashboardComponent },
      { path: 'typography', component: DashboardComponent }
    ]
  },
  { path: 'styleguide/color-palette', component: DashboardComponent },
  { path: 'styleguide/flexbox-grid', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false  // <-- debugging purposes only
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
