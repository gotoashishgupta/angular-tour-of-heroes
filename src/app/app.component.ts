import { Component } from '@angular/core';

export class Hero {
  public id: number;
  public name: string;
}

const HEROES: Array<Hero> = [
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
];

@Component({
  selector: 'app-root',
  template: (`
  <h1>{{title}}</h1>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
      <!-- each hero goes here -->
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
    <!--
      @NOTE: If the app imported collection modules, such as PaperElementsModule,
      [emitChanges] and [ironControl] must not be added to elements that the collection provides selectors for.
        * Add the [emitChanges] directive to all custom elements using two-way data binding.
        * Add [ironControl] to control elements that should work in Angular forms.
    -->
      <paper-input label="Name" name="name" required [(ngModel)]="selectedHero.name" placeholder="Name"></paper-input>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
  </div>
  `),
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
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
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
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
      background-color: #607D8B;
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

  private hero: Hero = HEROES.slice(0, 1)[0];

  public selectedHero: Hero;
  public heroes: Hero[] = HEROES;

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
