import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';

import { ShellComponent, UserListComponent } from './index';
import { Routes, RouterModule } from '@angular/router';



const AdminRoute: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
             { path : 'manageuser', component : UserListComponent}
        ]
    }
];

@NgModule({
    imports : [
        SharedModule,
        RouterModule.forChild(AdminRoute)
    ],
    exports : [],
    providers: [],
    declarations: [
        ShellComponent,
        UserListComponent
    ]
})

export  class  AdminModule {

}
