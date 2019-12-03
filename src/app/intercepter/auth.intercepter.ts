import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../models/config';
import { LocalstorageService } from '../services/common/localstorage.service';
import { AuthenticationService } from '../services/auth/authenication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private config: Configuration,
        private localstorageService:LocalstorageService,
        private authenticationService:AuthenticationService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let token = JSON.parse(this.localstorageService.getUserItem(this.config.id_token_key));
        if (token && token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Token '+token
                }
            });
            this.authenticationService.extendExpiryTime();
        }
 
        return next.handle(request);
    }
}