import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AlertNotifierService } from "../../services/alert/alert-notifier.service";
import { AuthenticationService } from "../../services/auth/authenication.service";
import { DataChangeNotifierService } from "../../services/datachangenotifier/data-change-notifier.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Configuration } from 'src/app/models/config';
import { CryptoService } from 'src/app/services/crypto/crypto.service';
import { LocalstorageService } from 'src/app/services/common/localstorage.service';
import { UtilityService } from 'src/app/services/common/utility.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertNotifierService,
    private dataChangeNotifier: DataChangeNotifierService,
    private configuration: Configuration,
    private cryptoService:CryptoService,
    private localstorageService:LocalstorageService,
    private utilityService:UtilityService
  ) { }

  ngOnInit() {
    // reset login status
    var isLogin = this.authenticationService.isLoggedIn();
    this.authenticationService.logout();
    this.route.queryParamMap.subscribe(queryParams => {
      this.returnUrl = queryParams.get("returnUrl")
      if(this.returnUrl){
        this.alertService.info("Your session is either invalid or expire. Kindly re-login to continue...")
      }
      else{
        this.returnUrl = "/institute";
      }
      
        var activationcode = queryParams.get("code");
        if (activationcode && activationcode.length > 0) {
          this.activateAccount(activationcode);
        }
        else {
          this.authenticationService.getUserCredential().subscribe(credential => {
            if (credential && credential.rememberMe) {
              this.model.username = credential.username;
              this.model.password = credential.password;
              this.model.rememberMe = credential.rememberMe;
            }
          });
        }
    })
  }

  login() {
    this.loading = true;
    this.authenticationService
      .login(this.model.username, this.model.password, this.model.rememberMe)
      .subscribe(
        data => {
          // this.dataChangeNotifier.modifyUserLoginState(true);
          let user:any=data;
          // login successful if there's a jwt token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              //var userId =  this.utilityService.get_uuidv4();
              if(user["expiresIn"] == undefined || user["expiresIn"] == null){
                user["expiresIn"] = this.configuration.session_expire_time;
              }
              
              this.localstorageService.setUserId(this.model.username)
              this.localstorageService.setUserItem(this.configuration.id_token_key, JSON.stringify(user.token));
              this.localstorageService.setUserItem(this.configuration.expires_time_key,  JSON.stringify(user.expiresIn));
              this.authenticationService.extendExpiryTime();
          }
          if(this.model.rememberMe){                    
              let data:any={username: this.model.username, password: this.cryptoService.encrypt(this.model.password), rememberMe: this.model.rememberMe};
              this.localstorageService.setItem(this.configuration.rememberMeKey, JSON.stringify(data));
          }
          else{        
            this.localstorageService.removeItem(this.configuration.rememberMeKey)     
          }
          this.router.navigate([this.returnUrl]);
          this.loading = false;
        },
        error => {
          if(error.error.message && error.error.message.length>0){
            this.alertService.error(error.error.message);
          } else  if(error.status =400 && error.error.error && error.error.error != null){
            this.alertService.error(error.error.error);
          }
          else{
            this.alertService.error(error.message);
          }
          this.loading = false;
        }
      );
  }
  activateAccount(activationcode: string) {
    this.loading = true;
    this.authenticationService
      .activateAccount(activationcode)
      .subscribe(
        data => {
          this.alertService.success("Account has been activated successfully. Welcome to TIMOLS — we're happy to have you!");
          this.loading = false;
        },
        error => {
          if(error instanceof HttpErrorResponse){
            this.alertService.error(error.error.error);
          }
          else if(error.error.message && error.error.message.length>0){
            this.alertService.error(error.error.message);
          }
          else{
            this.alertService.error(error.message);
          }
          this.loading = false;
        }
      );
  }
  forgotPassword(event) {
    event.preventDefault();
    this.alertService.success("We have send you an one-time password on your registered mailid. Kindly use it to reset your password.")
  }
}
