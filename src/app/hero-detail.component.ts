import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
      <!--
        @NOTE: If the app imported collection modules, such as PaperElementsModule,
        [emitChanges] and [ironControl] must not be added to elements that the collection provides selectors for.
          * Add the [emitChanges] directive to all custom elements using two-way data binding.
          * Add [ironControl] to control elements that should work in Angular forms.
      -->
        <paper-input label="Name" name="name" required [(ngModel)]="hero.name" placeholder="Name"></paper-input>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `,
  styles: [`
    .text-blue {
      color: #005cb9;
    }
  `]

})
export class HeroDetailComponent {
  @Input()
  public hero: Hero;
}
