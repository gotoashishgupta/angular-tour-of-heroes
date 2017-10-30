import { Component, OnInit } from '@angular/core';

import * as template from './px-app-nav.component.template.html';
import * as styles from './px-app-nav.component.style.scss';
@Component({
  selector: 'app-px-app-nav',
  template: `${template}`,
  styles: [`${styles}`],
})
export class PxAppNavComponent implements OnInit {
  public items;
  public selectedRoute;
  constructor() { }

  public ngOnInit() {
    this.items = [
      { label: 'Dashboard', id: 'dashboard', icon: 'px-fea:home' },
      { label: 'Heroes', id: 'heroes', icon: 'px-fea:templates' },
      {
        label: 'Style Guide',
        id: 'styleguide',
        icon: 'px-fea:calendar',
        children: [
          { label: 'Color Palette', id: 'color-palette', icon: 'px-fea:users' },
          { label: 'Typography', id: 'typography', icon: 'px-fea:spaces' },
          { label: 'Flexbox Grid', id: 'flexbox-grid', icon: 'px-fea:tag' },
          { label: 'Buttons', id: 'buttons', icon: 'px-fea:dev-ops' }
        ]
      },
      {
        label: 'Px Components', id: 'px-components', icon: 'px-fea:products',
        children: [
          { label: 'Px Tabs', id: 'px-tabs' },
          { label: 'Px App Nav', id: 'px-app-nav' }
        ]
      }];
  }

}
