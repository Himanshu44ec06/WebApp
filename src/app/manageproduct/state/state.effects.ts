import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export  class ManageCategoryEffects  {
    constructor(private actions$: Actions){

    }

    

    
}