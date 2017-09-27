import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { PolymerChanges } from '@codebakery/origami';

@Component({
  selector: 'app-px-tabs',
  templateUrl: './px-tabs.component.html',
  styleUrls: ['./px-tabs.component.scss']
})
export class PxTabsComponent implements OnInit {

  @PolymerChanges()
  public selectedTab: string;
  constructor() { }

  public ngOnInit() {
    this.selectedTab = 'tab2';
  }

}
