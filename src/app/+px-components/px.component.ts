import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-px-components',
  templateUrl: './px.component.html',
  styleUrls: ['./px.component.scss']
})
export class PxComponent implements OnInit {
  public title;
  public subtitle;
  public ngOnInit(): void {
    this.title = 'Px Components Demo';
  }
}
