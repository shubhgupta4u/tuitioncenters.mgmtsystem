import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private arrLocalStorageKeys: any[] = []
  private userId: any;

  constructor() { }

  getUserId(): any {
    if (this.userId === undefined || this.userId === null) {
      this.userId = localStorage.getItem('userId');
    }
    return this.userId;
  }

  setUserId(userId: any) {
    let currentUserId = this.getUserId();
    if (currentUserId !== undefined && currentUserId !== null && userId !== undefined && userId !== null && userId != currentUserId) {
      this.clearForUser();
    }
    if (userId !== undefined && userId !== null) {
      this.userId = userId;
      localStorage.setItem('userId', userId);
    }
  }

  getUserItem(key:any):any{
    return localStorage.getItem(this.getUserId()+'_'+key);
  }

  setUserItem(key:any, item:any):any{
    if (key !== undefined && key !== null) {
      let storageKey = this.getUserId()+'_'+key;
      this.setArrLocalStorageKey(storageKey);
      localStorage.setItem(storageKey, item);
    }
  }
  removeUserItem(key:any):any{
    return localStorage.removeItem(this.getUserId()+'_'+key);
  }
  getItem(key:any):any{
    return localStorage.getItem(key);
  }

  setItem(key:any, item:any):any{
      localStorage.setItem(key, item);
  }
  removeItem(key:any):any{
    return localStorage.removeItem(key);
  }
  isExist():boolean{
    let currentUserId = this.getUserId();
    return (currentUserId !== undefined && currentUserId !== null);
  }
  clearForUser(){
    this.arrLocalStorageKeys = this.getArrLocalStorageKey();
    this.arrLocalStorageKeys.forEach((p)=>localStorage.removeItem(p));
    this.arrLocalStorageKeys =[]
  }
  clear(){
    this.userId = null;
    localStorage.clear();
  }
  private setArrLocalStorageKey(key:any){
    let arrLocalStorageKeys = this.getUserId() + '_arrLocalStorageKeys';
    this.arrLocalStorageKeys = this.getArrLocalStorageKey();
    if(this.arrLocalStorageKeys.fill(p=>p === key).length <=0){
      this.arrLocalStorageKeys.push(key);
      localStorage.setItem(arrLocalStorageKeys,JSON.stringify(this.arrLocalStorageKeys));
    }
  }
  private getArrLocalStorageKey():any{
    let arrLocalStorageKeys = this.getUserId() + '_arrLocalStorageKeys';
    if(this.arrLocalStorageKeys === undefined){
      let val = JSON.parse(localStorage.getItem(arrLocalStorageKeys));
      this.arrLocalStorageKeys = (val === undefined)?[]:val;
    }
    return this.arrLocalStorageKeys;
  }
}
