import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DemoPxDatatableComponent } from './demo-px-datatable';

const routes: Routes = [
  // components
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'demo-px-datatable', component: DemoPxDatatableComponent },
  {
    path: 'styleguide', component: HeroesComponent,
    children: [
      { path: 'buttons', component: DashboardComponent },
      { path: 'typography', component: DashboardComponent }
    ]
  },
  { path: 'styleguide/color-palette', component: DashboardComponent },
  { path: 'styleguide/flexbox-grid', component: DashboardComponent },
  // lazy loaded modules
  /**
   * using { path: 'px-components', loadChildren: './+px-components/index#PxComponentsModule' },
   * fails `ng build --prod` with error
   * "Field 'browser' doesn't contain a valid alias configuration
   * ./src/$$_gendir/app/+px-components/index.ngfactory.ts doesn't exist"
   * to avoid this error use { path: 'px-components', loadChildren: './+px-components/px-components.module#PxComponentsModule' }
   */
  { path: 'px-components', loadChildren: './+px-components/px-components.module#PxComponentsModule' },
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
