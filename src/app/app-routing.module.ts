import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// import { HomeComponent } from './components/home/home.component'
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'src/app/components/home/home.module#HomeModule' },
  // { path: 'product/:id', loadChildren:'app/components/site-dashboard/productdetail/productdetail.module#ProductdetailModule' },
  // { path: 'category/:id', loadChildren:'app/components/site-dashboard/search/search.module#SearchModule' },
  // { path: 'search/:id/:searchText', loadChildren:'app/components/site-dashboard/search/search.module#SearchModule'},
  { path: 'login', loadChildren: 'src/app/components/login/login.module#LoginModule' },
  { path: 'confirm', loadChildren: 'src/app/components/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: 'src/app/components/register/register.module#RegisterModule' },
  // { path: 'filter/:id', component: SidebarFilterComponent },
  { path: 'institute', loadChildren: 'src/app/components/tuition-centre/tuition-centre.module#TuitionCentreModule' },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
