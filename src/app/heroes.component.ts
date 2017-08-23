import { Component, OnInit } from '@angular/core';

import { List } from 'immutable';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public hero: Hero;

  public selectedHero: Hero;
  public heroes: List<Hero>;

  constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  public getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => {
      this.heroes = heroes;
      this.hero = heroes.first();
    });
  }
}
