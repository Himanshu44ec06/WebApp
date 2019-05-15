import { Injectable, EventEmitter } from '@angular/core';
import { Observable,of } from 'rxjs';
import { UserModel } from '../model/UserModel';

@Injectable()
export class ManageUserService {

    listOfUser: UserModel[] = [
        {
        Id: 1,
        password : '',
        Username: 'testuser',
        Email: 'test@email.com',
        Status: 1,
        Roles : [{
            Id: 1,
            Role : 'Admin'
        }]

    }
];

    constructor() {
    }

    getUsers(): Observable<UserModel[]> {
        return of(this.listOfUser);
    }
}
