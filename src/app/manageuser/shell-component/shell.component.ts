import { Component, OnInit} from '@angular/core';
import { UserModel } from '../model/UserModel';

import { GlobalVariable } from '../../global';

import * as fromStore from '../state/state.reducer';
import * as  actions from '../state/state.actions';
import * as  state from '../state';
import { Store, select } from '@ngrx/store';


@Component({
    templateUrl : './shell.component.html'
})

export class  ShellComponent implements OnInit {
    searchString = '';
    UserList: UserModel[] = [];
    language = GlobalVariable.LanguageResourse;
    constructor(private store: Store<fromStore.ManageUserState>) {

    }

    ngOnInit() {
        this.store.dispatch(new actions.Load());

        this.store.pipe(select(state.getUsers)).subscribe((userList) => {
            this.UserList  =  userList.splice(0);
        });
    }

}