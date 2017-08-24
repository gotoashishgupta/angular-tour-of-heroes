export class AppSideMenuRoute {
  public id: string;
  public label: string;
  public children?: Array<AppSideMenuRoute>;
  public metadata?: Object | Array<Object>;
  public icon?: string;
}
