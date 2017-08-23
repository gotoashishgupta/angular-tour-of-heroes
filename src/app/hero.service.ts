import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<List<Hero>> {
    return Promise.resolve(HEROES);
  }
  public getHeroesSlowly(): Promise<List<Hero>> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  public getHero(id: number): Promise<Hero> {
    return Promise.resolve(HEROES).then(heroes => heroes.find(hero => {
      return hero.id === id;
    }));
  }
}
