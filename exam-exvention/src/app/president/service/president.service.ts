import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PresidentService {

  constructor(private http: HttpClient) { }

  getPresident(): Observable<Array<any>>{
    return this.http.get<Array<any>>('assets/presidentData.json');
  }
}
