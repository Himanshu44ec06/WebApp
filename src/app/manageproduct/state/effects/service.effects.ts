import { Injectable } from '@angular/core';
import { ManageService } from '../../service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, pipe } from 'rxjs';
import * as ManageServiceAction  from  '../actions/service.actions';
import { mergeMap,map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';


@Injectable()
export class ServiceEffects {

    constructor(private manageService:  ManageService,
           private actions: Actions
        ){}
    

    @Effect()
    loadService$ : Observable<Action> = this.actions.pipe(
        ofType( ManageServiceAction.ManageServiceActionTypes.LoadService),
        mergeMap(
            (action : any) =>  this.manageService.getServicesBySubCatId(action.payload).pipe(
                map( (list) => new ManageServiceAction.LoadServiceSuccess(list)),
                catchError( (err) => of(new ManageServiceAction.LoadServiceFail(err)))
            )
        )

    );

    @Effect()
    deleteService$: Observable<Action>  = this.actions.pipe(
         ofType( ManageServiceAction.ManageServiceActionTypes.DeleteService),
         mergeMap(
             (action: any) =>  this.manageService.deleteService(action.payload).pipe(
                  map( (service) =>  new ManageServiceAction.DeleteServiceSuccess(service) ),
                  catchError( (err) =>  of(new ManageServiceAction.DeleteServiceFailed(err)) )
             )
         )
    );

    @Effect()
    updateService$: Observable<Action> = this.actions.pipe(
         ofType( ManageServiceAction.ManageServiceActionTypes.UpdateService),
         mergeMap(
             (action: any) => this.manageService.updateService(action.payload).pipe(
                 map( (service) =>  new ManageServiceAction.UpdateServiceSuccess(service) ),
                 catchError( (err) =>  of(new ManageServiceAction.UpdateServiceFailed(err)) )
             )
         )
    );

    @Effect()
    addService$: Observable<Action> = this.actions.pipe(
        ofType(ManageServiceAction.ManageServiceActionTypes.AddService),
        mergeMap(
                (action : any) => this.manageService.addService(action.payload).pipe(
                    map( (service) =>  new ManageServiceAction.AddServiceSuccess(service)),
                    catchError( (err) =>  of(new ManageServiceAction.AddServiceFail(err)) )
                )       
        )
    );

}