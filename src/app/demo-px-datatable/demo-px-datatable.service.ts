import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import '../rxjs-debug';

import { List } from 'immutable';

@Injectable()
export class DemoPxDatatableService {
  private _datatableApiEndpoint = 'api/datatableItems';
  constructor(private http: Http) { }

  public get datatableItems$(): Observable<List<{}>> {
    return this.http
      .get(`${this._datatableApiEndpoint}`)
      .debug('get datatableItems endpoint')
      .map(res => res.json().data as List<{}>)
      .share();
  }
}
