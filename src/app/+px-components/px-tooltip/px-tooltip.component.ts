import { Component, OnInit } from '@angular/core';

import * as template from './px-tooltip.component.template.html';
import * as styles from './px-tooltip.component.style.scss';
@Component({
  selector: 'app-px-tooltip',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxTooltipComponent implements OnInit {

  public tooltipMessage: string;
  constructor() { }

  public ngOnInit() {
    this.tooltipMessage = 'Thanks for seeing tooltip demo';
  }

}
