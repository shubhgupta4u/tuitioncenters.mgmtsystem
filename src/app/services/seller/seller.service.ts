import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Configuration } from "../../models/config";
import { User } from "../../models/user";
import { Observable } from "rxjs/Observable";
import { CryptoService } from "../crypto/crypto.service";

@Injectable()
export class SellerService {
  private getCreateSellerAccountUrl: string;
  private updateActivationMailIdUrl: string;

  constructor(
    private _httpClient: HttpClient,
    private configuration: Configuration,
    private cryptoService: CryptoService
  ) {
    this.getCreateSellerAccountUrl =
      this.configuration.baseUrl + "createSellerAccount";
    this.updateActivationMailIdUrl =
      this.configuration.baseUrl + "updateActivationMailId";
  }

  createSellerAccount(user: User): Observable<any> {
    console.log("SellerService --> createSellerAccount()");
    user.password = this.cryptoService.encrypt(user.password);
    return this._httpClient
      .post(this.getCreateSellerAccountUrl, user)
      .map(data => {
        return data;
      });
  }
  updateActivationMailId(user: string, mailMessageid: number): Observable<any> {
    console.log("SellerService --> updateActivationMailId()");
    return this._httpClient
      .post(this.updateActivationMailIdUrl, {
        user: user,
        mailMessageid: mailMessageid
      })
      .map(data => {
        return data;
      });
  }
}
