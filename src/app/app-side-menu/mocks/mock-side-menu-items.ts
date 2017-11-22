import { List } from 'immutable';

import { SideMenuItemModel } from '../models/side-menu-item.model';

export const SIDE_MENU_ITEMS: List<SideMenuItemModel> = List<SideMenuItemModel>([

  { label: 'Microservice', id: 'home', icon: 'px-fea:microservice' },
  { label: 'Dashboard', id: 'dashboard', icon: 'px-fea:home' },
  { label: 'Demo Px Data Table', id: 'demo-px-datatable', icon: 'px-fea:tag' },
  {
    label: 'Px Components', id: 'px-components', icon: 'px-fea:templates',
    children: [
      { label: 'Px Accordion', id: 'px-accordion' },
      { label: 'Px Alert Message', id: 'px-alert-message' },
      { label: 'Px Tabs', id: 'px-tabs' },
      { label: 'Px App Nav', id: 'px-app-nav' },
      { label: 'Px Clipboard', id: 'px-clipboard' },
      { label: 'Px Date Time Picker', id: 'px-datetime-picker' },
      { label: 'Px Datatable', id: 'px-datatable' },
      { label: 'Px Tooltip', id: 'px-tooltip' },
      { label: 'Px Branding Bar', id: 'px-branding-bar' },
      { label: 'Px Breadcrumbs', id: 'px-breadcrumbs' }
    ]
  },
  { label: 'Heroes', id: 'heroes', icon: 'px-fea:products' }
  // { label: 'Hero Details', id: 'detail', icon: 'px-fea:asset' },
  // { label: 'Cases', id: 'heroes', icon: 'px-fea:cases' },
  // { label: 'Deployments', id: 'heroes', icon: 'px-fea:deployments' },
  // { label: 'Log', id: 'heroes', icon: 'px-fea:log' },
  // { label: 'Microservice', id: 'heroes', icon: 'px-fea:microservice' },
  // { label: 'Orchestration', id: 'heroes', icon: 'px-fea:orchestration' },
  // { label: 'Orders', id: 'heroes', icon: 'px-fea:orders' },
  // { label: 'Pipeline', id: 'heroes', icon: 'px-fea:pipeline' },
  // { label: 'Products', id: 'heroes', icon: 'px-fea:products' },
  // { label: 'Spaces', id: 'heroes', icon: 'px-fea:spaces' },
  // { label: 'Tag', id: 'heroes', icon: 'px-fea:tag' },
  // { label: 'Users', id: 'heroes', icon: 'px-fea:users' },
  // { label: 'Versions', id: 'heroes', icon: 'px-fea:versions' },
  // { label: 'Administration', id: 'heroes', icon: 'px-fea:administration' },
  // { label: 'Alerts', id: 'heroes', icon: 'px-fea:alerts' },
  // { label: 'Dev-ops', id: 'heroes', icon: 'px-fea:dev-ops' },
  // { label: 'Log', id: 'heroes', icon: 'px-fea:log' },
  // { label: 'Digital-twin', id: 'heroes', icon: 'px-fea:digital-twin' },
  // { label: 'Cases', id: 'heroes', icon: 'px-fea:cases' },
  // { label: 'Orchestration', id: 'heroes', icon: 'px-fea:orchestration' }
]);
