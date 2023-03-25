import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionModel } from 'src/app/dashboard/models/connection.model';
import { Token } from 'src/app/dashboard/models/customType.type';
import { InternshipModel } from 'src/app/dashboard/models/internship.model';
import { IUserHome } from 'src/app/dashboard/models/userHome.model';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {

  baseURL: string = 'http://localhost:3400';

  constructor(private http: HttpClient) { }

  getAll<T, P>(param: P): Observable<T> {
    return this.http.get<T>(`${this.baseURL}/${param}/getAll`);
  }

  connection(data: ConnectionModel): Observable<Token> {
    return this.http.post<Token>(`${this.baseURL}/admin/testConnection`, data);
  }

  getThisAdmin(): Observable<IUserHome> {
    return this.http.get<IUserHome>(`${this.baseURL}/admin/getThisAdmin`);
  }

  delete<P, T, R>(id: P, param: R): Observable<T> {
    return this.http.delete<T>(`${this.baseURL}/${param}/delete/${id}`);
  }
}