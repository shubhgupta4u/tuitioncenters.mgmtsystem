import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';

import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authenication.service';

declare var toggleSearchBoxDisplay: any;
declare var openSideNavigationBar: any;
declare var hideModal:any;
declare var registerSidebarToggleBtn:any ;
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit,OnDestroy {
  showSearchBox:boolean=false;
  searchIconClass:string="";
  routeName:string="";
  isUserAuthenticated:boolean = true;
  userLoginStateSubscription:Subscription;
  isInstitutePage:boolean = true;

  constructor(//private cacheService: LocalStorageCacheService,
              private location:Location,
              private router: Router,
              // private dateChangeNotifier:DataChangeNotifierService,
              private authService: AuthenticationService
              ) {    
  }
  ngOnInit() {
    // $(document).ready(function(){
    //   new registerSidebarToggleBtn('sidebarToggle2');
    // });
    
    // $(window).resize(function(){
    //   $('#site-body').css('margin-top',$('#site-header').outerHeight());
    // })
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.isInstitutePage = evt.url.indexOf('/institute') == 0;
        this.isUserAuthenticated = this.authService.isLoggedIn();

        $(document).ready(function () {
          new registerSidebarToggleBtn('sidebarToggleTop');
        });
        return;
      }
    });
    this.getAllCategories();
    if(!this.userLoginStateSubscription){
      // this.userLoginStateSubscription = this.dateChangeNotifier.userLoginStateChanged.subscribe(signState => this.isUserAuthenticated = signState);
    }    
  }
  ngOnDestroy(): void {
    // if(this.userLoginStateSubscription){
    //   this.userLoginStateSubscription.unsubscribe();
    // }
  }
  logout(event):void{
    new hideModal('logoutModal');
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getAllCategories(): void {
    // this.cacheService.getCategories().subscribe(categories => (this.categories = categories.filter(c=>c.parentId ==-1)));
  }

  openSideNavBar(event){
    // event.preventDefault();
    // new openSideNavigationBar();    
  }
  handleLayoutOnCategoryView(isSearchBoxOpen: boolean):void{
    // if(isSearchBoxOpen){
    // $('#site-body').css('margin-top',$('#site-header').outerHeight() + $('#container-searchbox').outerHeight() + 10);
    // }
    // else{
    //   $('#site-body').css('margin-top',$('#site-header').outerHeight()- $('#container-searchbox').outerHeight() - 10);
    // }
  }
  toggleSidebar(){
   
  }
  openSearchBox(event){
    // event.preventDefault();
    // this.showSearchBox = !this.showSearchBox;
    // let path = this.location.path();
    // this.routeName = path.split('/')[1];
    // this.handleLayoutOnCategoryView(this.showSearchBox);
    
    // if(this.showSearchBox)
    // {
    //   this.searchIconClass ="searchActive";
    // }
    // else
    // {
    //   this.searchIconClass ="";
    // }
  }
}
