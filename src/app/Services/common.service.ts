import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { input, NAMEoutput, NAMEinput } from '../Models/io.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCustomerName(BASICNO: string) {
    const postData = new NAMEinput(new input('BASIC',BASICNO));
    return this.http.post<NAMEoutput>('getname', postData);
  }

  getCustomerNameFromDeal(BRANCH: string,REF: string) {
    const postData = new NAMEinput(new input('DEAL_REFERENCE', REF));
    return this.http.post<NAMEoutput>('getname', postData);
  }

  getChargeCodeName(CHARGECODE: string) {
    const postData = new NAMEinput(new input('CHARGE_CODE', CHARGECODE));
    return this.http.post<NAMEoutput>('getname', postData);
  }
}
