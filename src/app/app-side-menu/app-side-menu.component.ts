import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

import { PolymerChanges } from '@codebakery/origami';

import { AppSideMenuRoute } from './app-side-menu-route';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-side-menu',
  templateUrl: './app-side-menu.html',
  styleUrls: ['./app-side-menu.scss']
})
export class SideMenuComponent implements OnInit {
  public sideMenuItems: AppSideMenuRoute[];
  @PolymerChanges()
  public navigateToRoute: any;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }
  public ngOnInit() {
    this.sideMenuItems = [
      {
        label: 'Dashboard',
        id: 'dashboard',
        icon: 'px-fea:home'
      },
      {
        label: 'Heroes',
        id: 'heroes',
        icon: 'px-fea:templates'
      },
      {
        'label': 'Style Guide',
        'id': 'styleguide',
        'icon': 'px-fea:asset',
        'children': [
          {
            'label': 'Color Palette',
            'id': 'color-palette'
          },
          {
            'label': 'Typography',
            'id': 'typography'
          },
          {
            'label': 'Flexbox Grid',
            'id': 'flexbox-grid'
          },
          {
            'label': 'Buttons',
            'id': 'buttons'
          }
        ]
      }
    ];
  }

  private navigate(e: Event, ele: HTMLElement): void {
    e.preventDefault();
    this._router.navigate([this.navigateToRoute.id]);
  }
}
