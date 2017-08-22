import { Component } from '@angular/core';

import { List } from 'immutable';

import { Hero } from './hero';

const HEROES: List<Hero> = List<Hero>([
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]);

@Component({
  selector: 'app-root',
  template: (`
  <h1>{{title}}</h1>

  <span>First Hero: {{hero.name}}</span>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
      <!-- each hero goes here -->
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `),
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
export class AppComponent {
  public title = 'Tour of Heroes';

  public hero: Hero = HEROES.first();

  public selectedHero: Hero;
  public heroes: List<Hero> = HEROES;

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
