import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as jquery from 'jquery';
import { AuthenticationService } from './services/auth/authenication.service';

declare const closeSideNavigationBar: any;
declare const stopBodyScrolling: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserLogin: boolean = true;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.isUserLogin = this.authService.isLoggedIn();
        return;
      }
    });
    // this.router.events.subscribe((evt) => {
    //     if (!(evt instanceof NavigationEnd)) {
    //         return;
    //     }
    //     setTimeout(function(){
    //       $('#site-body').css('margin-top',$('#site-header').outerHeight());
    //     },500);

    //     this.closeSideNavBar();
    //     stopBodyScrolling(false);
    //     window.scrollTo(0, 0);            
    // });
  }

  closeSideNavBar() {
    //closeSideNavigationBar();
  }
}
