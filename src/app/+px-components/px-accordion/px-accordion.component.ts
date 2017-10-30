import { Component, OnInit } from '@angular/core';

import * as template from './px-accordion.component.template.html';
import * as styles from './px-accordion.component.style.scss';
@Component({
  selector: 'app-px-accordion',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxAccordionComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
