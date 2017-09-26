import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { List } from 'immutable';

import { Hero } from './shared/models/hero';
import { HEROES } from './shared/mocks/mock-heroes';

import { SideMenuItemModel } from './app-side-menu/models/side-menu-item.model';
import { SIDE_MENU_ITEMS } from './app-side-menu/mocks/mock-side-menu-items';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  private _heroes: List<Hero> = HEROES;
  private _sideMenuItems: List<SideMenuItemModel> = SIDE_MENU_ITEMS;
  public createDb() {

    const heroes = this._heroes.unshift({ id: 0, name: 'Zero' }).toJS();
    const sideMenuItems = this._sideMenuItems.toJS();

    return { heroes, sideMenuItems };
  }
}
