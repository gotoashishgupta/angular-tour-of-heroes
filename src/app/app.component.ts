import { Component } from '@angular/core';

export class Hero {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
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
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
