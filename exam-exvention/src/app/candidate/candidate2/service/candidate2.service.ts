import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Candidate2Service {

  constructor(private http: HttpClient) { }

  getCandidate2(): Observable<Array<any>>{
    return this.http.get<Array<any>>('assets/candidate2Data.json');
  }
}
