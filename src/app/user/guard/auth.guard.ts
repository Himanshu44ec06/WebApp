import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GlobalVariable } from '../../global';

@Injectable({
    providedIn : 'root'
})
export class AuthGaurd implements  CanActivate {
// tslint:disable-next-line: max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if (this.authService.isLoggedIn()) {
            return true;
            
        }
        this.authService.redirectUrl = state.url;
        this.router.navigate([GlobalVariable.Url.LOGIN]);
    }

    constructor(private authService: AuthService,
                private router: Router
        ) {
    }

}
