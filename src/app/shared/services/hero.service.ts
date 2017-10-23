import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import '../../rxjs-debug';

import { List } from 'immutable';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {

  private _heroesApiEndpoint = '/api/heroes';
  private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public constructor(private http: HttpClient) { }
  public getHeroes(): Promise<List<Hero>> {
    return this.http.get(this._heroesApiEndpoint)
      .debug(`get HEROES ${this._heroesApiEndpoint}`)
      .toPromise()
      .then(response => response as List<Hero>)
      .catch(this._handleError);
  }
  public getHero(id: number): Promise<Hero> {
    const _url = `${this._heroesApiEndpoint}/${id}`;
    return this.http.get(_url)
      .debug(`get HERO ${_url}`)
      .toPromise()
      .then(response => response as Hero)
      .catch(this._handleError);
  }

  public update(hero: Hero): Promise<Hero> {
    const _url = `${this._heroesApiEndpoint}/${hero.id}`;
    return this.http.put(_url, hero, { headers: this._headers })
      .toPromise()
      .then(() => hero)
      .catch(this._handleError);
  }

  public create(name: string): Promise<Hero> {
    return this.http
      .post(this._heroesApiEndpoint, { name }, { headers: this._headers })
      .toPromise()
      .then((res) => res as Hero)
      .catch(this._handleError);
  }

  public delete(hero: Hero): Promise<void> {
    const _url = `${this._heroesApiEndpoint}/${hero.id}`;
    return this.http
      .delete(_url, { headers: this._headers })
      .toPromise()
      .then(() => null)
      .catch(this._handleError);
  }
  private _handleError(error: any): Promise<any> {
    console.error('An API error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
