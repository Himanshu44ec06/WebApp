import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import * as fromStore from '../state/state.reducer';
import * as  actions from '../state/state.actions';
import * as  state from '../state';
import { Store, select } from '@ngrx/store';


@Component({
     templateUrl: './userList.component.html'
})

export class  UserListComponent implements  OnInit {
    UserList: UserModel[];
    FilterUserList: UserModel[];

    constructor(private  store:  Store<fromStore.ManageUserState>){

    }

    ngOnInit() {
        this.store.dispatch(new actions.Load());

        this.store.pipe(select(state.getUsers)).subscribe((user) => {
                this.UserList = user;
                this.FilterUserList = this.UserList.slice(0);
                console.log(user);
          });
    }




}