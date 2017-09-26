import { Component, ChangeDetectorRef, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Polymer, PolymerChanges, OnPolymerChange } from '@codebakery/origami';

@Component({
  selector: 'app-px-data-table',
  templateUrl: './px-data-table.component.html',
  styleUrls: ['./px-data-table.component.scss']
})
export class PxDataTableComponent implements OnInit, OnPolymerChange {

  @PolymerChanges()
  public sampleTableData;

  @ViewChild('myTable')
  public myTable: ElementRef;
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit() {
    this.sampleTableData = [
      {
        first: 'Valentine', last: 'Meyer', email: 'valentinemeyer@scentric.com'
      },
      {
        first: 'Silva', last: 'Alexander', email: 'silvaalexander@gmail.com'
      },
      {
        first: 'Hopkins', last: 'Wong', email: 'hopkinswong@hotmail.com'
      },
      {
        first: 'Joe', last: 'Sherman', email: 'joejoe@yahoo.com'
      },
      {
        first: 'Jane', last: 'Bartlett', email: 'jane@scentric.com'
      }
    ];
  }

  public addNewRow(e: Event): void {
    /**
     * @NOTE: IMPORTANT - If array or object mutation happens on binded properties in angular
     * polymer doesn't get notified automatically. To have it notified change the polymer element
     * property directly and detech change in angular, as mentioned below
     */
    // this.sampleTableData.unshift({
    //   first: 'Hello ' + this.sampleTableData.length,
    //   last: 'Bye ' + this.sampleTableData.length,
    //   email: 'yourcount' + this.sampleTableData.length + '@mail.cc'
    // });
    (<Polymer.PropertyEffects>this.myTable.nativeElement).unshift('tableData', {
      first: 'Hello ' + this.sampleTableData.length,
      last: 'Bye ' + this.sampleTableData.length,
      email: 'yourcount' + this.sampleTableData.length + '@mail.cc'
    });
    console.log(this.myTable.nativeElement.tableData);
  }

  /**
   * @NOTE: IMPORTANT If array or object mutation happens in polymer listen to
   * onPolymerChange hook provided by @codebakery/origami and fire angular detect changes
   *
   */
  public onPolymerChange(): void {
    this._changeDetectorRef.detectChanges();
  }


}
