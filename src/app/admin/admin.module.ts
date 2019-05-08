import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { ShellComponent, UserListComponent } from './index';
import { Routes, RouterModule } from '@angular/router';



const AdminRoute: Routes = [
    { 
        path: '',
        component: ShellComponent,
        children: [
             { path : '/ManageUser', component : UserListComponent}
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
