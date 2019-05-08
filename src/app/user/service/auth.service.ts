import { Injectable, EventEmitter } from '@angular/core';
import { GlobalVariable } from '../../global';
import { User } from '../model/user';

@Injectable({
    providedIn : 'root'
})
export  class  AuthService {

    private currentUser: User | null;
    redirectUrl: string = GlobalVariable.Url.AfterLogin; //  Default 

    constructor() {
    }

    getCurrentUser(): User| null {
        return  this.currentUser;
    }

    setCurrentUser(value: User) {
        this.currentUser = value;
    }

    login(username: string, password: string) {

        if (username !== 'wrong') {
            this.currentUser = {
                id: 2,
                userName: username,
                token: 'authToken',
                roles: [{
                    id: 1,
                    token: 'authToken',
                    moduleId: 'token'
                }]
            };
        } else {
            this.currentUser = null;
            this.emptyRedirectUrl();
        }
        const  eventEmitter  =  new EventEmitter(true);

        setTimeout(() => {
              eventEmitter.emit(this.currentUser);
         }, 100);

        return  eventEmitter;
    }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    logout(): void {
        this.currentUser = null;
        this.emptyRedirectUrl();
    }

    private  emptyRedirectUrl() {
        this.redirectUrl =  '';
    }
}
