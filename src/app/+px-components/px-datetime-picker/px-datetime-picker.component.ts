import { Component, OnInit } from '@angular/core';

import * as template from './px-datetime-picker.component.template.html';
import * as styles from './px-datetime-picker.component.style.scss';
@Component({
  selector: 'app-px-datetime-picker',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxDatetimePickerComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
