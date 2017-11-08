import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // components
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'detail/:id', component: HeroDetailComponent, data: { title: 'Hero Details' } },
  { path: 'heroes', component: HeroesComponent, data: { title: 'Heroes List' } },
  {
    path: 'demo-px-datatable', loadChildren: './+demo-px-datatable/demo-px-datatable.module#DemoPxDatatableModule',
    data: { title: 'Datatable Demo' }
  },
  // lazy loaded modules
  /**
   * using { path: 'px-components', loadChildren: './+px-components/index#PxComponentsModule' },
   * fails `ng build --prod` with error
   * "Field 'browser' doesn't contain a valid alias configuration
   * ./src/$$_gendir/app/+px-components/index.ngfactory.ts doesn't exist"
   * to avoid this error use { path: 'px-components', loadChildren: './+px-components/px-components.module#PxComponentsModule' }
   */
  {
    path: 'px-components', loadChildren: './+px-components/px-components.module#PxComponentsModule',
    data: { title: 'Px Components' }
  },
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
