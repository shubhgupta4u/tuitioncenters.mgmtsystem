import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Router } from '@angular/router'
import { decode } from 'punycode';
import { Observable, from } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  options: any;
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, 
    private router: Router,
    private localStorageService:LocalstorageService) { }

  // login(email: string, password: string) {
  //   var body: any = {};
  //   body.email = email;
  //   body.password = password;
  //   return this.authorizeUser(body, 'token')
  // }

  // private authorizeUser(obj: any, action: string) {
  //   const headers = new HttpHeaders({ 'Content-Type': 'text/json' });
  //   return this.http.post(this.apiBaseUrl + action, obj, { responseType: 'text', headers: headers }).map((resp: any) => {
  //     // var parts = accessToken.split('.');
  //     // if (parts.length != 3) {
  //     //   throw new Error('JWT must have 3 parts')
  //     // }
  //     // var decoded = this.decode(parts[1]);
  //     // if (!decode) {
  //     //   throw new Error('Cannot decode the token');
  //     // }
  //     // else {
  //       var data = JSON.parse(decoded);
  //       this.localStorageService.setUserId(data.email);
  //       this.localStorageService.setUserItem('email', data.email);
  //       this.localStorageService.setUserItem('id', data.id);
  //       this.localStorageService.setUserItem('name', data.first_name + " " + data.last_name);
  //       this.localStorageService.setUserItem('tuitionCentre', data.tuition_centre.name);
  //       this.localStorageService.setUserItem('mobileNo', data.tuition_centre.mobileno);
  //     // }

  //     this.localStorageService.setUserItem('clientToken', document.cookie.split('=')[1]);
  //     this.localStorageService.setUserItem('accessToken', accessToken);
  //     return accessToken;
  //   })
  //     .catch((error) => {
  //       return this.errorHandler(error);
  //     });
  // }
  private handleError(operation: String) {
    return (error: any) => {
        if(error instanceof HttpErrorResponse) {
            // you could extract more info about the error if you want, e.g.:
            console.log(`status: ${error.status}, ${error.statusText}`);
            if (error && error.status == 401) {
              const loginlink = '/login';
              this.router.navigateByUrl(loginlink);
            }
        }
        
        return Observable.throw(error);
    }
}
  private errorHandler(error: any) {
    if (error && error.status == '401') {
      const loginlink = '/login';
      this.router.navigateByUrl(loginlink);
    }
    return Observable.throw(error);
  }
  decode(str: string) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        throw 'illegal base64url string';
      }
    }
    var d = decodeURIComponent((<any>window).escape(window.atob(output)));
    return d;
  }

  getHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('RequestToken', document.cookie.split('=')[1]);
    headers.append('Authorization','Token' + this.localStorageService.getUserItem('accessToken'));
    return headers;
  }
  getHeadersExcel(include: any = true): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders();
    if (include) {
      headers.append('Content-Type', 'application/octet-stream');
    }

    headers.append('RequestToken', document.cookie.split('=')[1]);
    headers.append('Authorization','Token' + this.localStorageService.getUserItem('accessToken'));
    return headers;
  }
  genericGetRequestNoParam(url: string) {
    this.options = { response: 'json', headers: this.getHeaders() };
    return this.http.get(this.apiBaseUrl + url, this.options).map((response: any) => {
      return response.json();
    })
      .catch((error) => {
        return this.errorHandler(error);
      });
  }
  genericDownloadFileRequestNoParam(url: string) {
    this.options = { response: 'blob', headers: this.getHeadersExcel() };
    return this.http.get(this.apiBaseUrl + url, this.options).map((response: any) => {
      return response.json();
    })
      .catch((error) => {
        return this.errorHandler(error);
      });
  }

  genericGetRequest(url: string, httpParam: HttpParams) {
    this.options = { headers: this.getHeaders() };
    if (httpParam != null && httpParam !== undefined) {
      this.options.params = httpParam;
    }
    return this.http.get(this.apiBaseUrl + url, this.options).map((response: any) => {
      return response;
    })
      .catch((error) => {
        return this.errorHandler(error);
      });
  }

  genericPostRequest(url: string, postData: any, isModel?: boolean) {
    this.options = { responseType: 'json', headers: this.getHeaders() };
    var postServiceData = null;
    if (isModel) {
      postServiceData = JSON.stringify(postData);
    } else {
      postServiceData = JSON.stringify(postData.data);
    }
    return this.http.post(this.apiBaseUrl + url, postServiceData, this.options).map((response: any) => {
      return response.json();
    })
      .catch((error) => {
        return this.errorHandler(error);
      });
  }
  postRequest(url: string, postData: any) {
    this.options = { headers: this.getHeaders() };
    return this.http.post(this.apiBaseUrl + url, postData, this.options)
      .pipe(
        tap(data => console.log('server data:', data)), 
        catchError(this.handleError(url))
    );
  }
  postRequestAsync(url: string, postData: any) {
    this.options = { headers: this.getHeaders() };
    var postServiceData = JSON.stringify(JSON.stringify(postData));
    return this.http.post(this.apiBaseUrl + url, postServiceData, this.options).toPromise();
  }
  postFileUploadRequest(url: string, postData: any) {
    this.options = { headers: this.getHeadersExcel() };
    return this.http.post(this.apiBaseUrl + url, postData, this.options).map((response: any) => {
      return response;
    })
      .catch((error) => {
        return this.errorHandler(error);
      });
  }
  postFileUploadRequestAsync(url: string, postData: any) {
    this.options = { headers: this.getHeadersExcel() };
    return this.http.post(this.apiBaseUrl + url, postData, this.options).toPromise();
  }

  getUser(user_Id:string){
    let params=new HttpParams();
    params.append('user_Id',user_Id)
    return this.genericGetRequest('user',params);
  }
  getUserConfiguration(user_Id:string){
    let params=new HttpParams();
    params.append('user_Id',user_Id)
    return this.genericGetRequest('userConfig',params);
  }
  getSytemConfiguration(){
    return this.genericGetRequestNoParam('userConfig');
  }
}
