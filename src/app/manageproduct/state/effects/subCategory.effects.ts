import { Injectable } from '@angular/core';
import { ManageSubCategoryService } from '../../service';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ManageSubCategoryAction from '../actions/subCategory.actions';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class  ManageSubCategoryEffects {
    constructor (private manageSubCategoryService: ManageSubCategoryService,
                 private  action:Actions
        ) {

    }

    @Effect()
    LoadSubCategory$: Observable<Action>  = this.action.pipe(

        ofType(ManageSubCategoryAction.ManageSubCategoryActionTypes.LoadSubCategory),
        mergeMap( (categoryId) =>  this.manageSubCategoryService.getSubcategoryBycategoryId(categoryId).pipe(
            map( (list)  =>  new ManageSubCategoryAction.LoadSubCategorySuccess(list)),
            catchError( (err) => of(new ManageSubCategoryAction.LoadSubCategoryFail(err)) )
        )  )

    )

    @Effect()
    UpdateSubCategory$ : Observable<Action>  = this.action.pipe(
        ofType( ManageSubCategoryAction.ManageSubCategoryActionTypes.UpdateSubCategory),
        mergeMap( (subcategory) => this.manageSubCategoryService.update(subcategory).pipe(
              map( (subCat) =>   new  ManageSubCategoryAction.UpdateSubCategorySuccess(subCat) ),
              catchError( (err) =>  of(new  ManageSubCategoryAction.UpdateSubCategoryFailed(err))  ) 
        ) )
    );

    @Effect()
    DeleteSubCategory$ :  Observable<Action>  = this.action.pipe(
        ofType( ManageSubCategoryAction.ManageSubCategoryActionTypes.DeleteSubCategory ),
        mergeMap( (SubCategory) =>  this.manageSubCategoryService.deleteSubCategory(SubCategory).pipe(
            map( (subcat) =>  new ManageSubCategoryAction.DeleteSubCategorySuccess(subcat)),
            catchError(  (err) =>  of(new ManageSubCategoryAction.DeleteSubCategoryFailed(err)) ) 

        ) )
    );

    @Effect()
    AddSubCategory$ :  Observable<Action> = this.action.pipe( 
        ofType(ManageSubCategoryAction.ManageSubCategoryActionTypes.AddSubCategory),
        mergeMap( (SubCategory) =>  this.manageSubCategoryService.addSubCategory(SubCategory).pipe(
                map( (subCat) => new ManageSubCategoryAction.AddSubCategorySuccess(subCat)),
                catchError( (err) =>  of(new ManageSubCategoryAction.AddSubCategoryFail(err)) )
        ))
    )  ;
}