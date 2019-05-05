import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

import { User } from '../model/user';

@Injectable({
    providedIn : 'root'
})
export  class  AuthService {

    private currentUser: User;

    constructor() {
    }

    login(username: string, password: string) {
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
    }
}
