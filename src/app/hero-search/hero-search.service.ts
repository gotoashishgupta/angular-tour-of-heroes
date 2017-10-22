import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import '../rxjs-debug';

import { List } from 'immutable';
import { Hero } from '../shared/models/hero';
import { HEROES } from '../shared/mocks/mock-heroes';

@Injectable()
export class HeroSearchService {
  private _heroesApiEndpoint = '/api/heroes';
  constructor(private http: HttpClient) { }
  public nameContains(term: string): Observable<List<Hero>> {
    return this.http
      .get(`${this._heroesApiEndpoint}?name=${term}`)
      .debug('Names which container')
      .map(res => res as List<Hero>)
      .share();
  }
}
