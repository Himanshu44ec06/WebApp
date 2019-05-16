import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { GlobalVariable } from '../global';
import { StoreModule } from '@ngrx/store';
import {  EffectsModule } from '@ngrx/effects';
import { ManageUserEffects } from './state/state.effects';

import {reducer} from './state/state.reducer';

import { UserListComponent,ShellComponent } from './index';
import { ManageUserService } from './service/ManageUser.service';

const routes: Routes = [
    { path : '', component : ShellComponent}
];

@NgModule({
    imports : [
        SharedModule,
        StoreModule.forFeature(GlobalVariable.Store.ManagerUserModule, reducer),
        EffectsModule.forFeature([ManageUserEffects]),
        RouterModule.forChild(routes),
    ],
    declarations : [
        UserListComponent,
        ShellComponent
    ],
    exports : [],
    providers: [
        ManageUserService
    ]
})
export class ManageUserModule {
}
