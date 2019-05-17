import { Injectable, EventEmitter } from '@angular/core';
import { GlobalVariable } from '../../global';
import { User } from '../model/user';
import { of, Observable } from 'rxjs';

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

    checkForPermission(roleId: string): boolean {
        if(this.currentUser) {
            return  !!this.currentUser.roles.find( p => p.moduleId === roleId);
        }
        return false;
    }

    setCurrentUser(value: User) {
        this.currentUser = value;
    }

    login(username: string, password: string): Observable<User> {

        this.currentUser = {
            id: 2,
            userName: username,
            token: 'authToken',
            roles: []
        };

        switch(username) {
            case 'wrong' :
             this.currentUser = null; 
             break;

            case 'admin' : 
            this.currentUser.roles.push({
                id: 1,
                token: 'authToken',
                moduleId: GlobalVariable.RolesKey.ManageUser
            });
            break;

            default: 
            break;
        }
       return  of(this.currentUser);
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
