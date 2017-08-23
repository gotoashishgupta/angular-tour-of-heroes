import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';

import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [`
    .text-blue {
      color: #005cb9;
    }
  `]

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

}
