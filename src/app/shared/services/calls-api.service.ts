import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionModel } from 'src/app/dashboard/models/connection.model';
import { Token } from 'src/app/dashboard/models/customType.type';
import { IUserHome } from 'src/app/dashboard/models/userHome.model';
import {InternshipPayload} from "../../dashboard/models/internship.payload";

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

  addInternship(internship : InternshipPayload) : Observable<any>{
    return this.http.post(`${this.baseURL}/internship/addInternship`, internship);
  }

  patchInternship(internship : InternshipPayload, id : number) : Observable<any>{
    return this.http.patch(`${this.baseURL}/internship/updating/${id}`, internship);
  }
}
