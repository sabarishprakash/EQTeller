import { Injectable } from '@angular/core';
import { asi } from 'src/app/Models/asi.model'
import { HttpClient } from '@angular/common/http';
import { APIoutput } from '../Models/io.model'

@Injectable({
  providedIn: 'root'
})
export class AsiService {

  constructor(private http: HttpClient) { }

  processASI(postData: asi) {
    return this.http.post<APIoutput>('asi', postData);
  }
}
