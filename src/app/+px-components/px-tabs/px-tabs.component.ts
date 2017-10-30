import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { PolymerChanges } from '@codebakery/origami';

@Component({
  selector: 'app-px-tabs',
  template: require('./px-tabs.component.template.html'),
  styles: [require('./px-tabs.component.style.scss')]
})
export class PxTabsComponent implements OnInit {

  @PolymerChanges()
  public selectedTab: string;
  constructor() { }

  public ngOnInit() {
    this.selectedTab = 'tab2';
  }

}
