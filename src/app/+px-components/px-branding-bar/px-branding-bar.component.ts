import { Component, OnInit } from '@angular/core';

import * as template from './px-branding-bar.component.template.html';
import * as styles from './px-branding-bar.component.style.scss';
@Component({
  selector: 'app-px-branding-bar',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxBrandingBarComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
