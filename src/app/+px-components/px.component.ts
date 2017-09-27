import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-px-components',
  templateUrl: './px.component.html',
  styleUrls: ['./px.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PxComponent implements OnInit {
  public title;
  public subtitle;
  public ngOnInit(): void {
    this.title = 'Px Components Demo';
  }
}
