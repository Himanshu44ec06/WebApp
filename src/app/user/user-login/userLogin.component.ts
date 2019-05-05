import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalVariable } from '../../global';


import { Store, select } from '@ngrx/store';
import * as fromUser from '../state';
import * as action from '../state/user.action';
import * as fromRoot from '../../state/state';


@Component({
    templateUrl : './userLogin.component.html'
})
export class UserLoginComponent implements OnInit, OnDestroy {
    language =  GlobalVariable.LanguageResourse;
    errorMessage: string;
    componentActive = true;
    maskUserName: boolean;

    constructor(private store: Store<fromRoot.State>) {

    }

    ngOnInit() {
       this.store.pipe(select(fromUser.getMaskUserName))
       .subscribe((maskUserName) => this.maskUserName =  maskUserName);
    }
    ngOnDestroy() {
        this.componentActive =  false;
    }

    checkChanged(value: boolean): void {
        this.store.dispatch(new action.MaskUserName(value))
    }

    login(loginForm) {
            console.log(loginForm);
    }


    cancel() {

    }


}