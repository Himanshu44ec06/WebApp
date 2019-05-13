import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { GlobalVariable } from '../global';
import { StoreModule } from '@ngrx/store';
import {  EffectsModule } from '@ngrx/effects';
import { ManageUserEffects } from './state/state.effects';

import { UserListComponent } from './index';

const routes: Routes = [
    { path : '', component : UserListComponent}
];

@NgModule({
    imports : [
        SharedModule,
        StoreModule.forFeature(GlobalVariable.Store.ManagerUserModule,{}),
        //EffectsModule.forFeature([ManageUserEffects]),
        RouterModule.forChild(routes),
    ],
    declarations : [
        UserListComponent
    ],
    exports : [],
    providers: []
})
export class ManageUserModule {
}
