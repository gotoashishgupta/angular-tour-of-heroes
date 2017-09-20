import { List } from 'immutable';

import { SideMenuItemModel } from '../models/side-menu-item.model';

export const SIDE_MENU_ITEMS: List<SideMenuItemModel> = List<SideMenuItemModel>([

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
  { label: 'Hero Details', id: 'detail', icon: 'px-fea:asset' },
  { label: 'Cases', id: 'heroes', icon: 'px-fea:cases' },
  { label: 'Deployments', id: 'heroes', icon: 'px-fea:deployments' },
  { label: 'Log', id: 'heroes', icon: 'px-fea:log' },
  { label: 'Microservice', id: 'heroes', icon: 'px-fea:microservice' },
  { label: 'Orchestration', id: 'heroes', icon: 'px-fea:orchestration' },
  { label: 'Orders', id: 'heroes', icon: 'px-fea:orders' },
  { label: 'Pipeline', id: 'heroes', icon: 'px-fea:pipeline' },
  { label: 'Products', id: 'heroes', icon: 'px-fea:products' },
  { label: 'Spaces', id: 'heroes', icon: 'px-fea:spaces' },
  { label: 'Tag', id: 'heroes', icon: 'px-fea:tag' },
  { label: 'Users', id: 'heroes', icon: 'px-fea:users' },
  { label: 'Versions', id: 'heroes', icon: 'px-fea:versions' },
  { label: 'Administration', id: 'heroes', icon: 'px-fea:administration' },
  { label: 'Alerts', id: 'heroes', icon: 'px-fea:alerts' },
  { label: 'Dev-ops', id: 'heroes', icon: 'px-fea:dev-ops' },
  { label: 'Log', id: 'heroes', icon: 'px-fea:log' },
  { label: 'Digital-twin', id: 'heroes', icon: 'px-fea:digital-twin' },
  { label: 'Cases', id: 'heroes', icon: 'px-fea:cases' },
  { label: 'Orchestration', id: 'heroes', icon: 'px-fea:orchestration' }
]);
