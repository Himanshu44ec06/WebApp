import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { GlobalVariable} from '../global';

import {ShellComponent, CreateCategoryComponent, CategoryListComponent ,
    ManageCategoryService, ManageService, ManageSubCategory} from './index';
import { StoreModule } from '@ngrx/store';
import {  EffectsModule } from '@ngrx/effects';
import { reducer } from './state/state.reducer';

import { ManageCategoryEffects } from './state/state.effects';
import { SharedModule } from '../shared/shared.module';


const  route: Routes = [
    { path : '', component :  ShellComponent}
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forFeature(GlobalVariable.Store.ManageCategory, reducer),
        EffectsModule.forFeature([ManageCategoryEffects]),
        RouterModule.forChild(route),
        MDBBootstrapModule.forRoot()
    ],
    exports: [],
    declarations: [
        ShellComponent,
        CreateCategoryComponent,
        CategoryListComponent
        
    ],
    providers : [
        ManageCategoryService,
        ManageService,
        ManageSubCategory,
        ManageCategoryEffects
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ManageProductModule {
}
