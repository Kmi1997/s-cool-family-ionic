import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {

  constructor(private http: HttpClient) { }

  getOne(): Observable<any> {
    return this.http.get('http://localhost:3200/intern/getAll');
  };

  connection(data: {}): Observable<any> {
    return this.http.post('http://localhost:3200/admin/testConnection', data).pipe(
      map(obj => console.log("Ok:" + obj))
    );
  }
}