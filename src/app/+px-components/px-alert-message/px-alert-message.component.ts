import { Component, OnInit } from '@angular/core';

import * as template from './px-alert-message.component.template.html';
import * as styles from './px-alert-message.component.style.scss';
@Component({
  selector: 'app-px-alert-message',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxAlertMessageComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
