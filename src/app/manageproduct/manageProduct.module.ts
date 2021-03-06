import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { GlobalVariable} from '../global';

import {ShellComponent, CreateCategoryComponent, CategoryListComponent,
     CategoryThumbnailComponent, SubCategoryListComponent,CreateSubcategoryComponent,
     SubcategoryThumbnailComponent, ServiceListComponent,
    ManageCategoryService, ManageService, ManageSubCategoryService }  from './index';
import { StoreModule } from '@ngrx/store';
import {  EffectsModule } from '@ngrx/effects';
import { reducer } from './state/state.reducer';


import { ManageCategoryEffects, ManageSubCategoryEffects,ServiceEffects } from './state/effects';
import { SharedModule } from '../shared/shared.module';


const  route: Routes = [
    { path : '', component :  ShellComponent},
    {path : ':Id/subcat/:subcatId', component: SubcategoryThumbnailComponent},
    { path : ':Id', component: CategoryThumbnailComponent}
    
    
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forFeature(GlobalVariable.Store.ManageCategory, reducer),
        EffectsModule.forFeature([ManageCategoryEffects,ManageSubCategoryEffects,ServiceEffects]),
        RouterModule.forChild(route),
        MDBBootstrapModule.forRoot()
    ],
    exports: [],
    declarations: [
        ShellComponent,
        CreateCategoryComponent,
        CategoryListComponent,
        CategoryThumbnailComponent,
        SubCategoryListComponent,
        CreateSubcategoryComponent,
        SubcategoryThumbnailComponent,
        ServiceListComponent
    ],
    providers : [
        ManageCategoryService,
        ManageService,
        ManageSubCategoryService,
        ManageCategoryEffects,
        ManageSubCategoryEffects
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ManageProductModule {
}
