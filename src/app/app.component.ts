import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: (`
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
  `)
})
export class AppComponent implements OnInit {

  public title = 'Tour of Heroes';
  public ngOnInit() {

  }
}
