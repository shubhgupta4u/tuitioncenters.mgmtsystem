import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authenication.service';

declare const  attachSidebarCollapseClickedHandler: any;

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './site-dashboard.component.html',
  styleUrls: ['./site-dashboard.component.scss']  
})
export class SiteDashboardComponent implements OnInit {
  title = "TIMOLS";
  isUserLogin: boolean = true;
  constructor(private router: Router, private authService: AuthenticationService) {    
    console.log(document.readyState);
    document.addEventListener("readystatechange", function (event) { 
      console.log(document.readyState);
      if(document.readyState === "complete")
      {
        //attachSidebarCollapseClickedHandler();
      }    
    } );
   }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.isUserLogin = this.authService.isLoggedIn();
        return;
      }
    });
  }

}
