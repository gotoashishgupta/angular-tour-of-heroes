import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-px-tooltip',
  templateUrl: './px-tooltip.component.html',
  styleUrls: ['./px-tooltip.component.scss']
})
export class PxTooltipComponent implements OnInit {

  public tooltipMessage: string;
  constructor() { }

  public ngOnInit() {
    this.tooltipMessage = 'Thanks for seeing tooltip demo';
  }

}
