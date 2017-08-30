import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import './rxjs-debug';

import { List } from 'immutable';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroSearchService {
  private _heroesApiEndpoint = 'api/heroes';
  constructor(private http: Http) { }
  public nameContains(term: string): Observable<List<Hero>> {
    return this.http
      .get(`${this._heroesApiEndpoint}?name=${term}`)
      .debug('Names which container')
      .map(res => res.json().data as List<Hero>)
      .share();
  }
}
