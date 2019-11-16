import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) {

  }
  getBaseUrl() {
    return 'https://tuition-mgmt-service.herokuapp.com/';
  }
  get(url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(this.getBaseUrl() + url, { responseType: 'text', headers });

    // return this.http.get(url
    //    ,{headers: {'Access-Control-Allow-Origin': '*' } }
    //   );
  }
}


