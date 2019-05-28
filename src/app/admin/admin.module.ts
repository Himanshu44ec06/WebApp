import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ShellComponent } from './index';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserAuthGuard } from './service/manageuser.auth';



const AdminRoute: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
             { path : 'manageuser', canActivate: [ManageUserAuthGuard] ,
             loadChildren : '../manageuser/manageuser.module#ManageUserModule'},
             { path : 'manageproduct', canActivate: [ManageUserAuthGuard] , // Change here  with Product Permission
             loadChildren : '../manageproduct/manageProduct.module#ManageProductModule'}
        ]
    }
];

@NgModule({
    imports : [
        SharedModule,
        RouterModule.forChild(AdminRoute),
        MDBBootstrapModule.forRoot()
    ],
    exports : [],
    providers: [
        ManageUserAuthGuard
    ],
    declarations: [
        ShellComponent,

    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export  class  AdminModule {

}
