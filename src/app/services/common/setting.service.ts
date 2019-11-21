import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private apiManager:ApiManagerService) { }

  getAllSetting(){
    if(sessionStorage.getItem('systemSetting')===undefined || sessionStorage.getItem('userConfiguration') == null){
      this.apiManager.getSytemConfiguration().map((data:any)=>{
        sessionStorage.setItem('systemSetting', JSON.stringify(data));
      })
    }
    return sessionStorage.getItem('systemSetting');
  }
}
