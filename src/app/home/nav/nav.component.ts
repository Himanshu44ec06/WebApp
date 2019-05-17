import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalVariable } from '../../global';
import { AuthService } from 'src/app/user/service/auth.service';
import { LocalStorageService } from 'src/app/shared/service/LocalStorage.service';
import { User } from 'src/app/user/model/user';
import { Router } from '@angular/router';
@Component({
// tslint:disable-next-line: component-selector
    selector: 'pm-nav',
    templateUrl: './nav.component.html'
})
export  class  NavComponent implements OnInit {
    language =  GlobalVariable.LanguageResourse;
    roles =  GlobalVariable.RolesKey;
    loginPage: string = GlobalVariable.Url.LOGIN;

    constructor(private authService: AuthService,
                private localStorage: LocalStorageService,
                private route:  Router
        ) {

    }

    ngOnInit() {
        this.readUserFromLocalStorage();
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeUnloadHander(event) {
        this.localStorage.set<User>(GlobalVariable.LocalStorage.CURRENT_USER,
            this.authService.getCurrentUser());
    }

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    get userName(): string {
        const user  =  this.authService.getCurrentUser();
        if (user) {
            return  user.userName;
        }
        return '';
    }

    logOut(): void  {
        this.authService.logout();
        this.route.navigateByUrl(this.loginPage)
    }

    havePermission(role: string) : boolean {
        return  this.authService.checkForPermission(role);
     }

    // Private Functions
    readUserFromLocalStorage() {
        const user = this.localStorage.get<User>(GlobalVariable.LocalStorage.CURRENT_USER);
        this.authService.setCurrentUser(user);
        // Empty  Local  Storage
        this.localStorage.remove(GlobalVariable.LocalStorage.CURRENT_USER);
    }
}
