import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { List } from 'immutable';

import { HeroSearchService } from './hero-search.service';
import { Hero } from '../shared/models/hero';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  providers: [
    HeroSearchService
  ]
})
export class HeroSearchComponent implements OnInit {

  public heroes: Observable<List<Hero>>;

  private _searchTerms = new Subject<string>();

  public constructor(private _heroSearchService: HeroSearchService, private _router: Router) { }
  public ngOnInit(): void {
    this.heroes = this._searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this._heroSearchService.nameContains(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<List<Hero>>(List([]))
      )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<List<Hero>>(List([]));
      });
  }

  /**
   * Please see https://angular.io/guide/template-syntax#ngfor-with-trackby
   */
  public trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

  // Push a search term into the observable stream.
  public search(term: string): void {
    this._searchTerms.next(term);
  }

  public gotoDetail(hero: Hero): void {
    if (!hero || hero.id === undefined) { return; }
    this._router.navigate(['/detail', hero.id]);
  }
}
