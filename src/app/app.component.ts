
import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'viacep-api-client';

  loading: boolean;

  constructor(public router: Router) { }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }

}
