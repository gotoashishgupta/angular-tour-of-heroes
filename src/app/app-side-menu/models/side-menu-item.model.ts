export class SideMenuItemModel {
  public id: string;
  public label: string;
  public children?: Array<SideMenuItemModel>;
  public metadata?: Object | Array<Object>;
  public icon?: string;
}
