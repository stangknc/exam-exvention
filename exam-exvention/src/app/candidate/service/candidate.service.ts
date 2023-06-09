import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getCandidate(): Observable<Array<any>>{
    return this.http.get<Array<any>>('assets/candidateData.json');
  }
}
