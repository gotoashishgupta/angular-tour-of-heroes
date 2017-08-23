import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private heroService: HeroService, private router: Router) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  public getHeroes(): void {
    this.heroService.getHeroes().then((heroes: List<Hero>) => {
      this.heroes = heroes;
      this.hero = List(heroes).first();
    });
  }

  public gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
