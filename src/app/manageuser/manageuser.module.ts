import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { GlobalVariable } from '../global';
import { StoreModule } from '@ngrx/store';
import {  EffectsModule } from '@ngrx/effects';
import { ManageUserEffects } from './state/state.effects';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {reducer} from './state/state.reducer';

import { UserListComponent, ShellComponent, CreateUserComponent } from './index';
import { ManageUserService } from './service/ManageUser.service';

const routes: Routes = [
    { path : '', component : ShellComponent}
];

@NgModule({
    imports : [
        SharedModule,
        StoreModule.forFeature(GlobalVariable.Store.ManagerUserModule, reducer),
        EffectsModule.forFeature([ManageUserEffects]),
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forChild(routes),
        MDBBootstrapModule.forRoot()
    ],
    declarations : [
        UserListComponent,
        ShellComponent,
        CreateUserComponent
    ],
    exports : [],
    providers: [
        ManageUserService
    ],
    schemas : [ NO_ERRORS_SCHEMA]
})
export class ManageUserModule {
}
