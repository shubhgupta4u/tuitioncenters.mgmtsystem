import { Component, OnInit } from '@angular/core';
declare var closeSideNavigationBar: any;
declare var registerSidebarToggleBtn:any;

@Component({
  selector: 'app-site-sidenavbar',
  templateUrl: './site-sidenavbar.component.html',
  styleUrls: ['./site-sidenavbar.component.scss']
})
export class SiteSidenavbarComponent implements OnInit {
  // categories: ICategory[];
  
  // constructor(private cacheService: LocalStorageCacheService) { }
  constructor() { }
  ngOnInit() {
    new registerSidebarToggleBtn('sidebarToggle');
    //this.getAllCategories();
  }
  getAllCategories(): void {
    // this.cacheService.getCategories().subscribe(categories => {
    //   this.categories = categories.filter(c=>c.parentId ==-1);
    // });
  }

  closeSideNavBar(event){
    event.preventDefault();
    //new closeSideNavigationBar();
  }
}
