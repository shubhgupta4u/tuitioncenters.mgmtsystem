import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../services/user/user-account.service';
import { AlertNotifierService } from '../../services/alert/alert-notifier.service';
import { UserAccount } from 'src/app/models/user-account.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserAccountService]
})
export class RegisterComponent implements OnInit {
  isAgree:boolean=false;
  model: any = {};
  loading:boolean=false;
  
  constructor(private userAccountServiceService:UserAccountService, private alertService:AlertNotifierService) { }

  ngOnInit() {
    
  }
  onAgreementSelected(flag:boolean){
    if(flag){
      this.isAgree=true;
    }else{
    this.isAgree=!this.isAgree;
    }
  }
  register(event){
    event.preventDefault();
    this.loading = true;
    if(this.model.password != this.model.confirmpwd){
      this.alertService.error("Password and Confirm password are not the same. kindly re-try!");
      this.loading = false; 
    }
    this.userAccountServiceService
      .createUserAccount(new UserAccount(this.model.email,this.model.password, this.model.firstname,this.model.lastname,this.model.phone,this.model.tuitionInstituteName))
      .subscribe(
        data => {
          if(data.success && data.user_id > 0){
            //this.alertService.success(data.message);
            this.model={};
            event.target.reset();
            this.alertService.success("Account is created successfully. We have send you an activation email on your registered email id. Kindly confirm your email id to activate the account.");
            this.isAgree = false;
          }else{
            this.alertService.error(data.message);
          }
          this.loading = false;         
        },
        error => {
          if(error.error.message && error.error.message.length>0){
            this.alertService.error(error.error.message);
          }
          else{
            this.alertService.error(error.message);
          }
          this.loading = false;
        }
      );
  }
}
