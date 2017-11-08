import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import '@modules/shared/util/rxjs-debug';

import { List } from 'immutable';

import { Hero } from '@modules/app/heroes/hero';
import { HeroService } from '@modules/app/heroes/hero.service';
import { HEROES } from '@modules/app/heroes/mock-heroes';

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
