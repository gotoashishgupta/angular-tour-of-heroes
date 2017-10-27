import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-drawer',
  template: `
    <p>
      app-drawer works!
      Drawer {{toggleDrawer ? 'Open' : 'Close'}}!!
    </p>
    <ng-content></ng-content>
    <ng-template #dynamicComponent></ng-template>
  `,
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {

  @Input() public toggleDrawer = false;


  constructor() { }

  public ngOnInit() {
  }
  public closeDrawer(): void {
    this.toggleDrawer = false;
  }

}
