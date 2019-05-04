import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalVariable } from '../../global';

@Component({
    templateUrl : './userLogin.component.html'
})
export class UserLoginComponent implements OnInit, OnDestroy {
    language =  GlobalVariable.LanguageResourse;
    errorMessage: string;
    componentActive = true;

    ngOnInit() {

    }
    ngOnDestroy() {
        this.componentActive =  false;
    }

    login(loginForm) {

    }


    cancel() {

    }


}