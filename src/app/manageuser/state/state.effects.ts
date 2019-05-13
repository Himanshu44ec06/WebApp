import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ManageUserService } from '../service/ManageUser.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as ManagerUserActions from '../state/state.actions';


@Injectable()
export class ManageUserEffects {

    constructor(private actions$: Actions,
                private  manageUserService: ManageUserService
        ){}


        @Effect()
        LoadUser$: Observable<Action> = this.actions$.pipe(
            ofType(ManagerUserActions.ManageUserActionTypes.Load),
            mergeMap(
               action => this.manageUserService.getUsers().pipe(
                   map(users => (new ManagerUserActions.LoadSuccess(users))),
                   catchError(err => of(new ManagerUserActions.LoadFail(err)) )
               )
            )
        );
}
