

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
    providedIn: 'root'
})

export class authGuard implements CanActivate {

    constructor(private accountService: AccountService, private toastr: ToastrService) {}

    canActivate(): Observable<boolean> {
        return this.accountService.currentUser$.pipe(
            map(user => {
                if (user) return true;
                else {
                    this.toastr.error('You shall not pass!');
                    return false
                }
            })
        )
    }
}



// For Angulr 18 Guard
// import { inject } from '@angular/core';
// import { CanActivateFn } from '@angular/router';
// import { AccountService } from '../_services/account.service';
// import { ToastrService } from 'ngx-toastr';

// export const AuthGuard: CanActivateFn = (route, state) => {
//     const accountService = inject(AccountService);
//     const toastr = inject(ToastrService);

//     if (accountService.currentUser$) {
//         return true;
//     } else {
//         console.log("Can't Login");
//         toastr.error('You shall not pass!');
//         return false;
//     }
// };