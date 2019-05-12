import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { GlobalVariable } from '../global';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
    { path : ''}
];

@NgModule({
    imports : [
        SharedModule,
        StoreModule.forFeature(GlobalVariable.Store.ManagerUserModule,{}),
        RouterModule.forChild(routes),
    ],
    declarations : [],
    exports : [],
    providers: []
})
export class ManageUserModule {
}
