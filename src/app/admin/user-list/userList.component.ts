import { Component } from '@angular/core';
import { UserModel } from '../model/UserModel';

@Component({
     templateUrl: './userList.component.html'
})

export class  UserListComponent {
    UserList: UserModel[];
    FilterUserList: UserModel[];

    constructor(){

    }


}