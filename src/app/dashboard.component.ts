import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public heroes: List<Hero>;

  public constructor(private heroService: HeroService) {

  }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes.slice(0, 4).toList();
    });
  }

}
