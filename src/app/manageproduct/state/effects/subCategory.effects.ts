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
        mergeMap( (action: any ) =>  this.manageSubCategoryService.getSubcategoryBycategoryId(action.payload).pipe(
            map( (list)  =>  new ManageSubCategoryAction.LoadSubCategorySuccess(list)),
            catchError( (err) => of(new ManageSubCategoryAction.LoadSubCategoryFail(err)) )
        )  )

    )

    @Effect()
    UpdateSubCategory$ : Observable<Action>  = this.action.pipe(
        ofType( ManageSubCategoryAction.ManageSubCategoryActionTypes.UpdateSubCategory),
        mergeMap( (action : any) => this.manageSubCategoryService.update(action.payload).pipe(
              map( (subCat) =>   new  ManageSubCategoryAction.UpdateSubCategorySuccess(subCat) ),
              catchError( (err) =>  of(new  ManageSubCategoryAction.UpdateSubCategoryFailed(err))  ) 
        ) )
    );

    @Effect()
    DeleteSubCategory$ :  Observable<Action>  = this.action.pipe(
        ofType( ManageSubCategoryAction.ManageSubCategoryActionTypes.DeleteSubCategory ),
        mergeMap( (action: any) =>  this.manageSubCategoryService.deleteSubCategory(action.payload).pipe(
            map( (subcat) =>  new ManageSubCategoryAction.DeleteSubCategorySuccess(subcat)),
            catchError(  (err) =>  of(new ManageSubCategoryAction.DeleteSubCategoryFailed(err)) ) 

        ) )
    );

    @Effect()
    AddSubCategory$ :  Observable<Action> = this.action.pipe( 
        ofType(ManageSubCategoryAction.ManageSubCategoryActionTypes.AddSubCategory),
        mergeMap( (action: any)  =>  this.manageSubCategoryService.addSubCategory(action.payload).pipe(
                map( (subCat) => new ManageSubCategoryAction.AddSubCategorySuccess(subCat)),
                catchError( (err) =>  of(new ManageSubCategoryAction.AddSubCategoryFail(err)) )
        ))
    )  ;
}