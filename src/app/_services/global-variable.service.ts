import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  private uId!: string;

  constructor() {
  }

  getBaseHeaderOptions() {
    return new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
  }

  getHeaderOptions() {
    return new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });
  }


  setUId(uid: string) {
    localStorage.setItem('uid', uid);
    this.uId = uid;
  }

  getUId() {
    if (this.uId != null) {
      return this.uId;
    }
    return localStorage.getItem('uid');
  }
}
