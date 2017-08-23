import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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
      this.heroes = List(heroes).slice(0, 4).toList();
    });
  }

}
