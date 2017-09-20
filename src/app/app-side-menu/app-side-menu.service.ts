import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import '../rxjs-debug';

import { List } from 'immutable';
import { SideMenuItemModel } from './models/side-menu-item.model';

@Injectable()
export class SideMenuService {
  private _sideMenuApiEndpoint = 'api/sideMenuItems';
  constructor(private http: Http) { }

  public get sideMenuItems$():  Observable<List<SideMenuItemModel>> {
    return this.http
      .get(`${this._sideMenuApiEndpoint}`)
      .debug('get sideMenuItems endpoint')
      .map(res => res.json().data as List<SideMenuItemModel>)
      .share();
  }
}
