import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as template from './px.component.template.html';
import * as styles from './px.component.style.scss';
@Component({
  selector: 'app-px-components',
  template: `${template}`,
  styles: [`${styles}`],
  encapsulation: ViewEncapsulation.Native
})
export class PxComponent implements OnInit {
  public title;
  public subtitle;
  public ngOnInit(): void {
    this.title = 'Px Components Demo';
  }
}
