
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MenuOpenService {

    obsCheckConnected$: Subject<boolean> = new Subject();

    constructor() { }

    obsCheckConnectedFn(): Subject<boolean> {

        return this.obsCheckConnected$;
    }
}
