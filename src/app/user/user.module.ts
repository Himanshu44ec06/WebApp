import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './index';

import { StoreModule } from '@ngrx/store';
import {GlobalVariable } from '../global';
import { reducer } from './state/user.reducer';

const userRoutes: Routes = [
    { path: 'login', component: UserLoginComponent }
];

@NgModule({
     imports : [
         SharedModule,
         RouterModule.forChild(userRoutes),
         StoreModule.forFeature(GlobalVariable.Store.UserModule,reducer)
     ],
     exports : [],
     declarations : [
         UserLoginComponent
     ],
})
export class UserModule {
}
