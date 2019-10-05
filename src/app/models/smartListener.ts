import { OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class SmartListener implements OnDestroy {
    listener: Subject<any>;
    constructor() {
        this.listener = new Subject();
    }
    ngOnDestroy(): void {
        this.listener.next();
        this.listener.complete();
    }


}