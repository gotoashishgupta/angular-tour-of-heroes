import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

import { logMethod } from '../shared/decorators/log-method.decorator';


// Ramda, RxJs, Polymer Imports
import { List } from 'immutable';
import { PolymerChanges } from '@codebakery/origami';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/merge';

import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';


import '../rxjs-debug';


import { DemoPxDatatableService } from './demo-px-datatable.service';

const R = require('ramda');

@Component({
  selector: 'app-demo-px-datatable',
  templateUrl: './demo-px-datatable.component.html',
  styleUrls: ['./demo-px-datatable.component.scss'],
  providers: [DemoPxDatatableService]
})
export class DemoPxDatatableComponent implements OnInit, AfterViewInit {

  public demoDatatableItems$: Observable<List<{}>>;
  public demoDatatableItems;

  @ViewChild('demoDatatable')
  public demoDatatableRef: ElementRef;


  public meta = [
    {
      name: 'last',
      type: 'dropdown',
      dropdownItems: [
        { key: '1', val: 'iPhone' },
        { key: '2', val: 'Android' },
        { key: '3', val: 'Blackberry' },
        { key: '4', val: 'Windows Phone' },
        { key: '5', val: 'Flip Phone', disabled: true }
      ]
    },
    {
      name: 'color',
      type: 'dropdown',
      dropdownItems: [
        { key: '1', val: 'green' },
        { key: '2', val: 'red' },
        { key: '3', val: 'blue', disable: true },
        { key: '4', val: 'white' },
        { key: '5', val: 'gray', disabled: true }
      ]
    }
  ];
  constructor(private _demoPxDatatableService: DemoPxDatatableService) { }

  public ngOnInit() {

    const _transformToInput = R.map(R.pipe(
      R.evolve(
        {
          first: R.toUpper,
          // open: this.provideToggleView
        }
      ),
      R.converge(R.assoc('actions'), [this.provideRowActions, R.identity])
    ));
    // const _transformToInput = R.compose(R.map(R.evolve({
    //   first: R.toUpper,
    //   open: this.provideToggleView
    // })), R.map(R.assoc('actions', this.provideRowActions())));

    this._demoPxDatatableService.datatableItems$
      .debug('Demo datatable before transform')
      .map(_transformToInput)
      .debug('Demo datatable after transform')
      .subscribe((res) => {
        this.demoDatatableItems = res;
      });
  }

  public ngAfterViewInit() {

    const action$ = Observable.fromEvent(this.demoDatatableRef.nativeElement, 'ng-px-row-action');
    const cell$ = Observable.fromEvent(this.demoDatatableRef.nativeElement, 'px-cell-click');
    // wait for event to bubble
    action$.debounceTime(100).withLatestFrom(cell$)
      .map(([x, y]: any) => {
        return {
          ...x.detail,
          ...y.detail
        };
      })
      .debug('just need action with row details')
      .subscribe(console.log.bind(console));



    const tableDataChange$ = Observable.fromEvent(this.demoDatatableRef.nativeElement, 'table-data-changed');
    tableDataChange$.debug('table-data-changed').subscribe(console.log.bind(console));

  }

  @logMethod()
  public filterTable() { return true; }

  @logMethod()
  public sortTable(a, b) {
    if (a.value === b.value) {
      return 0;
    } else if (a.value < b.value) {
      return 1;
    } else {
      return -1;
    }
  }

  @logMethod()
  public callOnAction(...args) {
    console.log(...args);
    return true;
  }


  @logMethod()
  public rowDataChangeListen(...args) {
    console.log(...args);
  }

  public provideRowActions() {
    return `
      <button
        onclick="Polymer.dom(this).parentNode.fire('ng-px-row-action', { action: 'save' })">
        Save
      </button>
      <button
        onclick="Polymer.dom(this).parentNode.fire('ng-px-row-action', { action: 'delete' })">
        Delete
      </button>
      <button
        onclick="Polymer.dom(this).parentNode.fire('ng-px-row-action', { action: 'refresh' })">
        Refresh
      </button>
     `;
  }

  @logMethod()
  public provideToggleView(val) {
    if (val) {
      return `<px-toggle size="large" emitChanges checked onblur="console.log(event)"></px-toggle>`;
    } else {
      return `<px-toggle size="large" emitChanges></px-toggle>`;
    }
  }

}
