import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { List } from 'immutable';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  private _heroesApiEndpoint = 'api/heroes';
  private _headers = new Headers({ 'Content-Type': 'application/json' });
  public constructor(private http: Http) { }
  public getHeroes(): Promise<List<Hero>> {
    return this.http.get(this._heroesApiEndpoint)
      .toPromise()
      .then(response => response.json().data as List<Hero>)
      .catch(this._handleError);
  }
  public getHero(id: number): Promise<Hero> {
    const _url = `${this._heroesApiEndpoint}/${id}`;
    return this.http.get(_url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this._handleError);
  }

  public update(hero: Hero): Promise<Hero> {
    const _url = `${this._heroesApiEndpoint}/${hero.id}`;
    return this.http.put(_url, JSON.stringify(hero), { headers: this._headers })
      .toPromise()
      .then(() => hero)
      .catch(this._handleError);
  }

  public create(name: string): Promise<Hero> {
    return this.http
      .post(this._heroesApiEndpoint, JSON.stringify({ name }), { headers: this._headers })
      .toPromise()
      .then((res) => res.json().data as Hero)
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
