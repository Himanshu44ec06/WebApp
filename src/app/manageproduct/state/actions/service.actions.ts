import { Action } from '@ngrx/store';
import { Service } from '../../model';


export enum  ManageServiceActionTypes {
    LoadService = '[ManageService] LoadService',
    LoadServiceFail = '[ManageService] LoadServiceFailed',
    LoadServiceSuccess = '[ManageCategory] LoadServiceSuccess',

    AddService = '[ManageService] AddService',
    AddServiceSuccess = '[ManageService] AddServiceSuccess',
    AddServiceFail = '[ManageService] AddServiceFail',

    SetCurrentService = '[ManageService] SetCurrentService',
    ClearCurrentService = '[ManageService] ClearCurrentService',
    InitalizeService  =  '[ManageService] InitalizeService',

    DeleteService = '[ManageService] DeleteService',
    DeleteServiceSuccess = '[ManageService] DeleteServiceSuccess',
    DeleteServiceFailed = '[ManageService] DeleteServiceFailed',

    UpdateService = '[ManageService] UpdateService',
    UpdateServiceSuccess = '[ManageService] UpdateServiceSuccess',
    UpdateServiceFailed = '[ManageService] UpdateServiceFailed',

}


export class AddService  implements Action {
      readonly type  = ManageServiceActionTypes.AddService
      constructor(public payload: Service) {}
}

export class AddServiceSuccess  implements Action  {
    readonly  type  =  ManageServiceActionTypes.AddServiceSuccess;
    constructor(public payload: Service) {}
}

export  class  AddServiceFail implements  Action  {
    readonly  type  = ManageServiceActionTypes.AddServiceFail;
    constructor(public payload: string) { }
}

export class UpdateService implements  Action {
    readonly  type  = ManageServiceActionTypes.UpdateService;
    constructor(public payload: Service) { }
}

export class UpdateServiceSuccess implements  Action {
    readonly  type  = ManageServiceActionTypes.UpdateServiceSuccess;
    constructor(public payload: Service) { }
}

export class UpdateServiceFailed implements  Action {
    readonly  type  = ManageServiceActionTypes.UpdateServiceFailed;
    constructor(public payload: string) { }
}

export class DeleteService implements  Action {
    readonly  type  = ManageServiceActionTypes.DeleteService;
    constructor(public payload: Service) { }
}

export class DeleteServiceSuccess implements  Action {
    readonly  type  = ManageServiceActionTypes.DeleteServiceSuccess;
    constructor(public payload: Service) { }
}

export class DeleteServiceFailed implements  Action {
    readonly  type  = ManageServiceActionTypes.DeleteServiceFailed;
    constructor(public payload: string) { }
}


export  class LoadService implements Action {
    readonly type =  ManageServiceActionTypes.LoadService;
    constructor(public  payload: number) {}
}

export  class LoadServiceSuccess implements Action {
    readonly type =  ManageServiceActionTypes.LoadServiceSuccess;
    constructor(public payload: Service[]) { }
}

export class LoadServiceFail implements  Action {
    readonly  type = ManageServiceActionTypes.LoadServiceFail;
    constructor(public payload: string) { }
}

export class  SetCurrentService implements Action  {
    readonly  type  = ManageServiceActionTypes.SetCurrentService;
    constructor(public payload: Service) { }
}
export class ClearCurrentService implements Action {
    readonly  type = ManageServiceActionTypes.ClearCurrentService;
}

export  class  InitalizeService  implements Action {
    readonly  type = ManageServiceActionTypes.InitalizeService;
    public payload =  new Service();
}

export type ManageServiceAction =  LoadService 
| LoadServiceSuccess
| LoadServiceFail 
| UpdateService
| UpdateServiceFailed
| UpdateServiceSuccess 
| DeleteService
| DeleteServiceFailed
| DeleteServiceSuccess
| SetCurrentService
| ClearCurrentService
| InitalizeService
| AddService 
| AddServiceFail 
| AddServiceSuccess
