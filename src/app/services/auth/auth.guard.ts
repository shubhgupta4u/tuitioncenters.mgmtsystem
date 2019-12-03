import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Configuration } from '../../models/config';
import { LocalstorageService } from '../common/localstorage.service';
import { AuthenticationService } from './authenication.service';

 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router,private config: Configuration,                
        private localstorageService:LocalstorageService,
        private authenticationService:AuthenticationService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isLoggedIn()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

}