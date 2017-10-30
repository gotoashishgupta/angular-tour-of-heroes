import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../shared/models/hero';

import { HeroService } from '../shared/services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  template: require('./hero-detail.component.html'),
  // Styles in a component are fully local to the component and don't bleed to outside components
  styleUrls: ['./hero-detail.component.scss']

})
export class HeroDetailComponent implements OnInit {
  @Input()
  public hero: Hero;

  public constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute,
    private location: Location) {

  }

  public ngOnInit() {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => {
        return this.heroService.getHero(+params.get('id'));
      }).subscribe(hero => this.hero = hero);
  }

  public save() {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  public goBack(): void {
    this.location.back();
  }

}
