// liga o front com o back
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token ea241e70f2c02a5e37c1ddd13bed8c1746066340';
  httpHeaders = new HttpHeaders()
    .set(
      // 'Content-Type': 'applications/json'
      'X-CSRFToken',
      'csrftoken'
    )
    .set('Authorization', this.token);
  //  interação com a api
  constructor(private http: HttpClient) {}
  getAllMembers(): Observable<any> {
    return this.http.get(this.baseUrl + 'gerals/', {
      headers: this.httpHeaders,
    });
  }
  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'gerals/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
  // metodo POST criar
  saveNewMember(geral: any): Observable<any> {
    return this.http.post(this.baseUrl + 'gerals/', geral, {
      headers: this.httpHeaders,
    });
  }
}
