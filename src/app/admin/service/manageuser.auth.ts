import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/user/service/auth.service';
import { GlobalVariable } from '../../global';


@Injectable()
export class  ManageUserAuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          const user = this.authService.getCurrentUser();
          if (user && user.roles.length) {
                if (user.roles.find(p => p.moduleId === GlobalVariable.RolesKey.ManageUser)) {
                   return  true;
                }
                this._navigateToLoginPage();
            }
          this._navigateToLoginPage();
    }

    private _navigateToLoginPage() {
        this.authService.logout();
        this.router.navigateByUrl(GlobalVariable.Url.LOGIN);
    }

}
