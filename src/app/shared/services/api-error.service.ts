import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorService {

  apiError: Subject<string> = new Subject<string>();

  constructor() { }

  sendError(msg: string): void {
    this.apiError.next(msg);
  };
};
