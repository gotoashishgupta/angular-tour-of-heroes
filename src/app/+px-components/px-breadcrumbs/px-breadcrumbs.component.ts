import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { breadcrumbsGraph } from './mocks/breadcrumbs-graph.mock';
import { IBreadcrumbsGraph } from './models/breadcrumbs-graph.model';
import { PolymerChanges, OnPolymerChange } from '@codebakery/origami';
import { logMethod } from '../../shared/decorators/log-method.decorator';

import * as template from './px-breadcrumbs.component.template.html';
import * as styles from './px-breadcrumbs.component.style.scss';
@Component({
  selector: 'app-px-breadcrumbs',

  template: `${template}`,
  styles: [`${styles}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PxBreadcrumbsComponent implements OnInit, OnPolymerChange, OnChanges {

  public breadcrumbsGraph: Array<IBreadcrumbsGraph>;

  @PolymerChanges()
  public selectedRoute: Array<string>;
  constructor(private _changeDectectorRef: ChangeDetectorRef) { }

  public ngOnInit() {
    this.breadcrumbsGraph = breadcrumbsGraph;
    this.selectedRoute = ['North America', 'United States of America', 'California', 'San Ramon', 'Crow Canyon Gardens'];
  }

  @logMethod()
  public onPolymerChange(property, $event, newValue) {

    console.log('---> onPolymerChange', this['__METHOD__']);
    this._changeDectectorRef.detectChanges();
  }

  @logMethod()
  public ngOnChanges() {
  }
}
