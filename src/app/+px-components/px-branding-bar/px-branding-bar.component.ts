import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-px-branding-bar',
  template: require('./px-branding-bar.component.template.html'),
  styles: [require('./px-branding-bar.component.style.scss')]
})
export class PxBrandingBarComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
