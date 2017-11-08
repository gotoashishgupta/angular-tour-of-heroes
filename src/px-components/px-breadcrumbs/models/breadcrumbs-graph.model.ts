export class IBreadcrumbsGraph {
  public id: string;
  public label: string;
  public children?: Array<IBreadcrumbsGraph>;
  public metadata?: Object | Array<Object>;
  public icon?: string;
}
