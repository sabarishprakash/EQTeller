import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { input, NAMEoutput, NAMEinput } from '../Models/io.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient,
    private router: Router) { }

  menus = [
  { key:"customer", heading:"Customers", icon:"../../../assets/Customer_icon.png" },
  { key:"accounts", heading:"Accounts", icon:"../../../assets/Account_icon.png" },
  { key:"enquiry", heading:"Enquiry", icon:"../../../assets/Enquiry_icon.png" },
  { key:"deals", heading:"Deals", icon:"../../../assets/Deals_icon.png" },
  { key:"cards", heading:"Cards", icon:"../../../assets/Cards_icon.png" },
  { key:"forex", heading:"Forex", icon:"../../../assets/Forex_icon.png" }];

  inHome() {
    return this.router.url.substring(13) ? false : true;
  }

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

  getTransactionCodeName(TRANSACTION_CODE: string) {
    const postData = new NAMEinput(new input('TRANSACTION_CODE', TRANSACTION_CODE));
    return this.http.post<NAMEoutput>('getname', postData);
  }
}
