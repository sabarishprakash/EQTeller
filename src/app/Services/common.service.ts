import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCustomerName(BASICNO: string) {
    //return this.http.post<{FULLNAME: ' ',SHORTNAME: ' '}>('http://172.16.8.115:10099/web/services/GETCUSNAME/', {BASICNO});
    return this.http.post<{FULLNAME: ' ',SHORTNAME: ' '}>('GETCUSNAME', {BASICNO});
  }

  getCustomerNameFromDeal(BRANCH: string,REF: string) {
    return this.http.post<{FULLNAME: ' ',SHORTNAME: ' '}>('GCUSTNDEAL', {BRANCH, REF});
  }

  getChargeCodeName(CHARGECODE: string) {
    return this.http.post<{FULLNAME: ' '}>('GETCHGCNAM', {CHARGECODE});
  }
}
