import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  getPolicy(): Observable<Array<any>>{
    return this.http.get<Array<any>>('assets/policyData.json');
  }

}
