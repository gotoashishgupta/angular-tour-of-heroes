import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service';


import { PolymerChanges } from '@codebakery/origami';


import * as template from './dashboard.component.template.html';
import * as styles from './dashboard.component.style.scss';
@Component({
  selector: 'app-dashboard',

  template: `${template}`,
  styles: [`${styles}`]
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

  /**
   * Please see https://angular.io/guide/template-syntax#ngfor-with-trackby
   */
  public trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }
}
