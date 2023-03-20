import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({
    'X-CSRFToken': 'csrftoken',
    // 'Content-Type': 'applications/json',
  });

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
      linkedin: geral.surname,
      github: geral.phone,
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
