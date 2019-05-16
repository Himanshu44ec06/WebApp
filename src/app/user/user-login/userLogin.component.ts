import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalVariable } from '../../global';


import { Store, select } from '@ngrx/store';
import * as fromUser from '../state';
import * as action from '../state/user.action';
import * as fromRoot from '../../state/state';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl : './userLogin.component.html'
})
export class UserLoginComponent implements OnInit, OnDestroy {
    language =  GlobalVariable.LanguageResourse;
    errorMessage: string;
    componentActive = true;
    maskUserName: boolean;

    constructor(private store: Store<fromRoot.State>,
                private authService: AuthService,
                private router: Router) {

    }

    ngOnInit() {
       if (this.authService.isLoggedIn()) {
          this.redirect();
       } else {
       this.store.pipe(select(fromUser.getMaskUserName))
       .subscribe((maskUserName) => this.maskUserName =  maskUserName);
       }
    }
    ngOnDestroy() {
        this.componentActive =  false;
    }

    checkChanged(value: boolean): void {
        this.store.dispatch(new action.MaskUserName(value))
    }

    login(loginForm) {
        if (loginForm && loginForm.valid) {
            const userName = loginForm.form.value.userName;
            const password = loginForm.form.value.password;
            this.authService.login(userName, password).subscribe(() => {
                const currentUser =  this.authService.isLoggedIn();
                if (currentUser) {
                    this.redirect();
                } else {
                    this.errorMessage = GlobalVariable.LanguageResourse.InCorrectCred;
                }
            });
          } else {
            this.errorMessage =  GlobalVariable.LanguageResourse.InValidLoginForm;
          }
    }

    redirect(): void {
        if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.errorMessage = '';
        } else {
             this.router.navigateByUrl(GlobalVariable.Url.AfterLogin);
        }
    }

    cancel() {

    }


}