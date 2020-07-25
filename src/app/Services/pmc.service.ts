import { Injectable } from '@angular/core';
import { pmc } from '../Models/pmc.model';
import { HttpClient } from '@angular/common/http';
import { APIoutput } from '../Models/io.model';

@Injectable({
  providedIn: 'root'
})
export class PmcService {

  constructor(private http: HttpClient) { }

  processPMC(postData: pmc) {
    //return this.http.post<{RETURNSTATUS: ' ',ERRORMESSAGE: ' '}>('http://172.16.8.115:10099/web/services/PMC/', postData);
    return this.http.post<APIoutput>('pmc', postData);
  }
}
