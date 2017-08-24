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
    });
  }

  public add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.create(heroName)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  public delete(hero: Hero): void {
    if (!hero || hero.id === undefined) {
      return;
    }
    this.heroService.delete(hero)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero) as List<Hero>;
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  public gotoDetail(): void {
    this.router.navigate(['detail', this.selectedHero.id]);
  }
}
