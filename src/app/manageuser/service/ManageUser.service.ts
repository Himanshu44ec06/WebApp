import { Injectable, EventEmitter } from '@angular/core';
import { Observable,of } from 'rxjs';
import { UserModel } from '../model/UserModel';

@Injectable()
export class ManageUserService {

    constructor() {

    }

    getUsers(): Observable<UserModel[]> {
        const  listOfUser: UserModel[]  = [];
        return of(listOfUser);
    }
}
