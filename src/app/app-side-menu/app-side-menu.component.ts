// core angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

// Ramda, RxJs, Polymer Imports
import { List } from 'immutable';
import { PolymerChanges } from '@codebakery/origami';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';

// module imports

// component imports
import { SideMenuItemModel } from './models/side-menu-item.model';
import { SideMenuService } from './app-side-menu.service';


const R = require('ramda');

@Component({
  selector: 'app-side-menu',
  template: require('./app-side-menu.template.html'),
  styles: [require('./app-side-menu.style.scss')],
  providers: [SideMenuService]
})
export class SideMenuComponent implements OnInit {

  public sideMenuItems$: Observable<List<SideMenuItemModel>>;

  @PolymerChanges()
  public activateRouteLink: string[];

  constructor(private _router: Router, private _route: ActivatedRoute, private _sideMenuService: SideMenuService) { }

  public ngOnInit() {

    this.sideMenuItems$ = this._sideMenuService.sideMenuItems$;

    const _routeSegments$ = this._router.events
      .filter(event => event instanceof NavigationEnd)
      .pluck('urlAfterRedirects')
      .map((v: string) => v.replace(/^\/+/g, '').split('/'));

    Observable.combineLatest(_routeSegments$, this.sideMenuItems$)
      .map(([xm, om]) => {
        /**
         * Gives list of matched route segments to render in side-menu
         * @param acc accmulator
         * @param [x, o]: where x is array of values to match against array o of [{id, children[]}]
         */
        const matchPath = (acc, [x, o]) => {
          const xs = R.head(x);
          const matchedNode = R.find(R.propEq('id', xs))(o);
          if (matchedNode) {
            acc = R.concat(acc, [xs]);
            if (R.length(R.tail(x)) && R.has('children', matchedNode)) {
              acc = matchPath(acc, [R.tail(x), R.prop('children', matchedNode)]);
            }
          }
          return acc;
        };

        return matchPath([], [xm, om]);
      })
      .subscribe((matchedRoute) => {
        this.activateRouteLink = matchedRoute;
      });
  }

  private navigate(e: Event, ele: HTMLElement): void {
    e.preventDefault();
    this._router.navigate(this.activateRouteLink);
  }
}
