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
    constructor(private store: Store<fromStore.ManageUserState>) {

    }

    searchString = '';
    UserList: UserModel[] = [];
    language = GlobalVariable.LanguageResourse;
    ShowDeletePopup =  false;
    currentSelectedUser: UserModel | null;

    ngOnInit() {
        this.store.dispatch(new actions.Load());

        this.store.pipe(select(state.getUsers)).subscribe((userList) => {
            this.UserList  =  userList.slice(0);
            this.cancelAddMode();
        });

        this.store.pipe(select(state.getCurrentUser)).subscribe((user) => {
                  this.currentSelectedUser = user;
        });
    }

    AddNewUserEvent() {
        this.store.dispatch(new actions.InitializeCurrentUser());
    }

    CreateUser(user: UserModel) {
        if (user.Id === 0) {
            this.store.dispatch(new actions.CreateUser(user));
        } else {
            this.store.dispatch(new actions.UpdateUser(user));
        }
    }

    cancelAddMode(): void {
        this.store.dispatch(new actions.ClearCurrentUser());
    }

    closeDeletePopup(): void {
            this.ShowDeletePopup =  false;
    }

    showDeletePopUp(): void {
          this.ShowDeletePopup =  true;
    }

    deleteUser(): void {
         this.ShowDeletePopup =  false;
    }

    DeleteUserClicked(event): void {
        this.ShowDeletePopup =  true;
    }

    EditUserClicked(event): void  {
        this.store.dispatch(new actions.SetCurrentUser(event));  
    }

}

