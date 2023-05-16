import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private http: HttpClient,
  ) { }

  postFormData(name:any, text:any): Observable<any> {
    const URL = ` https://343df210-bdc8-4d01-9893-220e303a45ca.mock.pstmn.io/contact/member`;
    return this.http.post<any>(URL, name, text);
  }
}
