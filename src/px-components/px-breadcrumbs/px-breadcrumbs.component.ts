import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { breadcrumbsGraph } from './mocks/breadcrumbs-graph.mock';
import { IBreadcrumbsGraph } from './models/breadcrumbs-graph.model';
import { PolymerChanges, OnPolymerChange } from '@codebakery/origami';

@Component({
  selector: 'app-px-breadcrumbs',
  templateUrl: './px-breadcrumbs.component.html',
  styleUrls: ['./px-breadcrumbs.component.scss'],
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

  public onPolymerChange(property, $event, newValue) {

    console.log('---> onPolymerChange', this['__METHOD__']);
    this._changeDectectorRef.detectChanges();
  }
  public ngOnChanges() {
  }
}
