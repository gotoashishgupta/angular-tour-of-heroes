import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';

import { IS_GRAYSKULL } from './injection-tokens';

@Component({
  selector: 'app-root',
  template: require('./app.component.template.html'),
  styles: [require('./app.component.style.scss')]
})
export class AppComponent implements OnInit {

  public title = 'Predix UI With ng4 & polymer2';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, @Inject(IS_GRAYSKULL) public isGraySkull) { }
  public ngOnInit() {
    console.log('IS_GRAYSKULL', this.isGraySkull);
    // this.currentRoute = this._router.events.filter(event => event instanceof NavigationEnd)
    //   .debug('Find End Url').map((r: NavigationEnd) => {
    //     return r.urlAfterRedirects.replace(/^\/+/g, '').split('/');
    //   })
  }
}
