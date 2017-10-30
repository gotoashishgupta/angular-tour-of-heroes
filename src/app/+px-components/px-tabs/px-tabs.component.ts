import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { PolymerChanges } from '@codebakery/origami';

import * as template from './px-tabs.component.template.html';
import * as styles from './px-tabs.component.style.scss';
@Component({
  selector: 'app-px-tabs',
  template: `${template}`,
  styles: [`${styles}`]
})
export class PxTabsComponent implements OnInit {

  @PolymerChanges()
  public selectedTab: string;
  constructor() { }

  public ngOnInit() {
    this.selectedTab = 'tab2';
  }

}
