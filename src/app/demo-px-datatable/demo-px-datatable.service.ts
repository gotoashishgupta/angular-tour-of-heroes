import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import '../rxjs-debug';

import { List } from 'immutable';

@Injectable()
export class DemoPxDatatableService {
  private _datatableApiEndpoint = '/api/datatableItems';
  constructor(private http: HttpClient) { }

  public get datatableItems$(): Observable<List<{}>> {
    return this.http
      .get(`${this._datatableApiEndpoint}`)
      .debug('get datatableItems endpoint')
      .map(res => res as List<{}>)
      .share();
  }
}
