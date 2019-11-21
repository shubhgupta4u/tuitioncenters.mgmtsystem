import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private apiManager:ApiManagerService) { }

  getUserSetting(){
    if(sessionStorage.getItem('userConfiguration')===undefined || sessionStorage.getItem('userConfiguration') == null){
      this.apiManager.getUserConfiguration("3").map((date:any)=>{
        sessionStorage.setItem('userConfiguration', JSON.stringify(date));
      })
    }
    return sessionStorage.getItem('userConfiguration');
  }
}
