import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';

@Injectable()
export class ManageUserService {

    constructor() {

    }

    getUsers(): Observable<UserModel[]> {
        return null;
    }
}
