import { Component, OnInit } from '@angular/core';

import * as template from './px-clipboard.component.template.html';
import * as styles from './px-clipboard.component.style.scss';
@Component({
  selector: 'app-px-clipboard',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxClipboardComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
