import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-px-components',
  template: require('./px.component.template.html'),
  styles: [require('./px.component.style.scss')],
  encapsulation: ViewEncapsulation.Native
})
export class PxComponent implements OnInit {
  public title;
  public subtitle;
  public ngOnInit(): void {
    this.title = 'Px Components Demo';
  }
}
