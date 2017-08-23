import { InMemoryDbService } from 'angular-in-memory-web-api';

import { List } from 'immutable';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
export class InMemoryDataService implements InMemoryDbService {

  private _heroes: List<Hero> = HEROES;
  public createDb() {
    const heroes = this._heroes.unshift({ id: 0, name: 'Zero' }).toJS();
    return { heroes };
  }
}
