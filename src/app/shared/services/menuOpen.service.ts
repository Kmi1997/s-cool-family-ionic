import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUserHome } from 'src/app/dashboard/models/userHom.model';

@Injectable({
    providedIn: 'root'
})
export class MenuOpenService {

    obsCheckConnected: Subject<boolean> = new Subject();

    constructor() { }

    obsCheckConnectedFn(): Subject<boolean> {
        return this.obsCheckConnected;
    }
}