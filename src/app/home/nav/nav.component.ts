import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../global';
import { AuthService } from 'src/app/user/service/auth.service';
@Component({
// tslint:disable-next-line: component-selector
    selector: 'pm-nav',
    templateUrl: './nav.component.html'
})
export  class  NavComponent implements OnInit {
    language =  GlobalVariable.LanguageResourse;

    constructor(private authService: AuthService) {

    }

    ngOnInit() {

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

    logOut() : void  {
        this.authService.logout();
    }
}
