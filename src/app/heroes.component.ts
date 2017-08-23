import { Component, OnInit } from '@angular/core';

import { List } from 'immutable';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [`
    .selected {
      background-color: #005cb9 !important;
      border: 1px solid #005cb9;
      color: #fff;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #005cb9 !important;
      border: 1px solid #005cb9;
      color: #fff;
    }
    .heroes li:hover {
      border: 1px solid #005cb9;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #005cb9;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
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
