import { Component, OnInit } from '@angular/core';

import { PolymerChanges } from '@codebakery/origami';

@Component({
  selector: 'app-px-tabs',
  templateUrl: './px-tabs.component.html',
  styleUrls: ['./px-tabs.component.scss']
})
export class PxTabsComponent implements OnInit {

  @PolymerChanges()
  public selectedTab = 'tab2';
  constructor() { }

  public ngOnInit() { }

  public changeTab($event) {
    console.log('hello', $event);
  }

}
