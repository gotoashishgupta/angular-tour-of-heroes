import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Angular Polymer Demo App';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }
  public ngOnInit() {
    // this.currentRoute = this._router.events.filter(event => event instanceof NavigationEnd)
    //   .debug('Find End Url').map((r: NavigationEnd) => {
    //     return r.urlAfterRedirects.replace(/^\/+/g, '').split('/');
    //   })
  }
}
