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

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'gerals/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
  // put atualizar o dado
  updateMember(geral: any): Observable<any> {
    let body = {
      name: geral.name,
      linkedin: geral.linkedin,
      github: geral.github,
    };

    return this.http.put(this.baseUrl + 'gerals/' + geral.id + '/', body, {
      headers: this.httpHeaders,
    });
  }
  // deletar membro
  deleteMember(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'gerals/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
}
