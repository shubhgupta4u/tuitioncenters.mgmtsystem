import { Injectable } from '@angular/core';

declare var uuidv4: any;;

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  get_uuidv4() {
   return new uuidv4();
  }

}
