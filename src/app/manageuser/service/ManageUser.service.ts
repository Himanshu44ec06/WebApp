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
                Role : 'ManageUser'
            }]
        }
    ];

    getUsers(): Observable<UserModel[]> {
        return of(this.listOfUser);
    }

    createUser(user: UserModel): Observable<UserModel> {
        user.Id = this.listOfUser.length + 1;
        this.listOfUser.push(user);
        return of(user);
    }

    deleteUser(user: UserModel): Observable<UserModel>{
        this.listOfUser = this.listOfUser.filter( (f) => { return  f.Id !==  user.Id });
        return of(user);
    }

    updateUser(user: UserModel) : Observable<UserModel> {
         var  index  =  this.listOfUser.findIndex(f=> f.Id === user.Id);
         this.listOfUser[index] =  user;
         return of(user);
    }
}
