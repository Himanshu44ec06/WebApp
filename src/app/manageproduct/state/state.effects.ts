import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as ManagerCategoryActions from '../state/state.actions';
import { ManageCategoryService } from '../service/ManageCategory.service';



@Injectable()
export  class ManageCategoryEffects  {
    constructor(private actions$: Actions,
                private categoryService: ManageCategoryService
        ) {

    }

    @Effect()
    LoadCategory$: Observable<Action> = this.actions$.pipe(
        ofType( ManagerCategoryActions.ManageProductActionTypes.LoadCategory),
        mergeMap(
            action =>  this.categoryService.getCategory().pipe(
                map( list =>  new ManagerCategoryActions.LoadCategorySuccess(list)),
                catchError( err => of(new ManagerCategoryActions.LoadCategoryFail(err)))
            )
        )
    );

    @Effect()
    AddCategory$: Observable<Action> = this.actions$.pipe(
           ofType(ManagerCategoryActions.ManageProductActionTypes.AddCategory),
           mergeMap(
               (actions: any) => this.categoryService.addCatgory(actions.payload).pipe(
                   map( category => new ManagerCategoryActions.AddCategorySuccess(category) ),
                   catchError( err => of(new ManagerCategoryActions.AddCategoryFail(err)) )

               )
           )
    );

    @Effect()
    DeleteCtegory$: Observable<Action> = this.actions$.pipe(
        ofType(ManagerCategoryActions.ManageProductActionTypes.DeleteCategory),
        mergeMap(
            (action: any) => this.categoryService.deleteCategory(action.payload).pipe(
                map( category => new ManagerCategoryActions.DeleteCategorySuccess(category) ),
                catchError( err =>  of(new ManagerCategoryActions.DeleteCategoryFailed(err)) )
            )
        )
    );

    @Effect()
    UpdateCategory$: Observable<Action> =  this.actions$.pipe(
        ofType(ManagerCategoryActions.ManageProductActionTypes.UpdateCategory),
        mergeMap(
             (action: any) =>  this.categoryService.updateCategory(action.payload).pipe(
                 map( category => new ManagerCategoryActions.UpdateCategorySuccess(category)),
                 catchError( err => of(new ManagerCategoryActions.UpdateCategoryFailed(err)))
             )
        )
    );

}
