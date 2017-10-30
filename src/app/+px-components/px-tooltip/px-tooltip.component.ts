import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-px-tooltip',
  template: require('./px-tooltip.component.template.html'),
  styles: [require('./px-tooltip.component.style.scss')]
})
export class PxTooltipComponent implements OnInit {

  public tooltipMessage: string;
  constructor() { }

  public ngOnInit() {
    this.tooltipMessage = 'Thanks for seeing tooltip demo';
  }

}
