import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SiteHeaderComponent } from './components/common/site-header/site-header.component';
import { SiteFooterComponent } from './components/common/site-footer/site-footer.component';
import { SiteDashboardComponent } from './components/common/site-dashboard/site-dashboard.component';
import { AlertComponent } from './directives/alert/alert.component';
import { AlertNotifierService } from './services/alert/alert-notifier.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './intercepter/auth.intercepter';
import { CacheInterceptor } from './intercepter/cache.intercepter';
import { AuthenticationService } from './services/auth/authenication.service';
import { Configuration } from './models/config';
import { CryptoService } from './services/crypto/crypto.service';
import { DataChangeNotifierService } from './services/datachangenotifier/data-change-notifier.service';
import { PipesModule } from './pipes/pipes.module';
import { HttpCacheService } from './services/cache/cache.service';
import { LocalStorageCacheService } from './services/cache/localstoragecache.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteDashboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    PipesModule
  ],
  providers: [
    DataChangeNotifierService,
    AuthenticationService,
    AlertNotifierService,
    LocalStorageCacheService,
    Configuration,
    CryptoService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: CacheInterceptor,
    //   multi:true
    // },
    HttpCacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
