import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './app-side-menu.html',
  styleUrls: ['./app-side-menu.scss']
})
export class SideMenuComponent implements OnInit {
  public sideMenuItems: Array<{}>;
  public pathPrefix: string;
  constructor(public route: ActivatedRoute) { }
  public ngOnInit() {
    this.sideMenuItems = [
      {
        label: 'Dashboard',
        id: 'dashboard',
        icon: 'px-fea:home'
      },
      {
        label: 'Heroes',
        id: 'heroes',
        icon: 'px-fea:templates'
      },
      {
        'label': 'Assets',
        'id': 'assets',
        'icon': 'px-fea:asset',
        'children': [
          {
            'label': 'Asset #1',
            'id': 'a1'
          },
          {
            'label': 'Asset #2',
            'id': 'a2'
          }
        ]
      }];

    this.pathPrefix = '/';
  }

  private navigate(e: Event, ele: HTMLElement): void {
    console.log(ele, e);
    e.preventDefault();
  }
}
