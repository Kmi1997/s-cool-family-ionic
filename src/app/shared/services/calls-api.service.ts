import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserHome } from 'src/app/dashboard/models/userHom.model';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {

  baseURL: string = 'http://localhost:3400';

  constructor(private http: HttpClient) { }

  getOne(): Observable<{}> {
    return this.http.get(`${this.baseURL}/intern/getAll`);
  }

  connection(data: {}): Observable<any> {
    return this.http.post(`${this.baseURL}/admin/testConnection`, data);
  }

  getThisAdmin(): Observable<IUserHome> {
    return this.http.get<IUserHome>(`${this.baseURL}/admin/getThisAdmin`);
  }
}