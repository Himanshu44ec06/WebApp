import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {ShellComponent , ManageCategory, ManageService, ManageSubCategory} from './index';


const  route: Routes = [
    { path : '', component :  ShellComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        MDBBootstrapModule.forRoot()
    ],
    exports: [],
    declarations: [
        ShellComponent
    ],
    providers : [
        ManageCategory,
        ManageService,
        ManageSubCategory
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ManageProductModule {
}
