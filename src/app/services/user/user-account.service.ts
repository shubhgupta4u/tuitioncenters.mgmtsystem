import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CryptoService } from "../crypto/crypto.service";
import { UserAccount } from 'src/app/models/user-account.model';
import { ApiManagerService } from '../common/api-manager.service';

@Injectable()
export class UserAccountService {
  private getCreateSellerAccountUrl: string;
  private updateActivationMailIdUrl: string;

  constructor(
    private cryptoService: CryptoService,
    private apiManagerService: ApiManagerService
  ) {
  }

  createUserAccount(user: UserAccount): Observable<any> {
    user.password = this.cryptoService.encrypt(user.password);
    var serializeUser = JSON.stringify(user);
    var data:any ={};
    data.data = this.cryptoService.encrypt(serializeUser);
    return this.apiManagerService.postRequest("user", data);
  }
}
