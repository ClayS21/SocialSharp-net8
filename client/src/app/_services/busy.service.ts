import { inject, Injectable } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class BusyService {
    busyRequestCount = 0;
    private spinnerService = inject(NgxSpinnerService);

    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'ball-pulse-sync',
            bdColor: 'rgba(255,255,255,0)',
            color: '#C2CDEA'
        })
    }

    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}
