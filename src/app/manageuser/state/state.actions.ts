/* NgRx */
import { Action } from '@ngrx/store';
import { UserModel } from '../model/UserModel';

export  enum  ManageUserActionTypes {
    Load = '[ManageUser] Load',
    SetCurrentUser = '[ManageUser] Set Current User',
    ClearCurrentUser = '[ManageUser] Clear Current User',
    InitializeCurrentUser = '[ManagerUser] Initialize Current User',
    LoadSuccess = '[ManageUser] Load Success',
    LoadFail = '[ManageUser] Load Fail',
    UpdateUser = '[ManagerUser] Update User',
    UpdateUserSuccess = '[ManagerUser] Update User Success',
    UpdateUserFail = '[ManagerUser] Update User Fail',
    CreateUser = '[ManagerUser] Create User',
    CreateUserSuccess = '[ManagerUser] Create User Success',
    CreateUserFail = '[ManagerUser] Create User Fail',
    DeleteUser = '[ManagerUser] Delete User',
    DeleteUserSuccess = '[ManagerUser] Delete User Success',
    DeleteUserFail = '[ManagerUser] Delete User Fail'
}

export class SetCurrentUser implements Action {
    readonly type = ManageUserActionTypes.SetCurrentUser;
    constructor(public payload: UserModel) { }
}

export  class InitializeCurrentUser implements Action {
    readonly type =  ManageUserActionTypes.InitializeCurrentUser;
}


export class  ClearCurrentUser implements Action {
     readonly type = ManageUserActionTypes.ClearCurrentUser;
}

export class Load implements Action {
    readonly type = ManageUserActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ManageUserActionTypes.LoadSuccess;
    constructor(public payload: UserModel[]) { }
}

export class LoadFail implements Action {
    readonly type = ManageUserActionTypes.LoadFail;
    constructor(public payload: string) { }
}

export class UpdateUser implements Action {
    readonly type = ManageUserActionTypes.UpdateUser;
    constructor(public payload: UserModel) { }
}

export class UpdateUserSuccess implements Action {
    readonly type = ManageUserActionTypes.UpdateUserSuccess;
    constructor(public payload: UserModel) { }
}

export class UpdateUserFail implements Action {
    readonly type = ManageUserActionTypes.UpdateUserFail;
    constructor(public payload: string) { }
}

export class CreateUser implements Action {
    readonly type = ManageUserActionTypes.CreateUser;
    constructor(public payload: UserModel) { }
}

export class CreateUserSuccess implements Action {
    readonly type = ManageUserActionTypes.CreateUserSuccess;
    constructor(public payload: UserModel) { }
}
  
export class CreateUserFail implements Action {
    readonly type = ManageUserActionTypes.CreateUserFail;
    constructor(public payload: string) { }
}

export class DeleteUser implements Action {
    readonly type = ManageUserActionTypes.DeleteUser;
    constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = ManageUserActionTypes.DeleteUserSuccess;
  constructor(public payload: number) { }
}

export class DeleteUserFail implements Action {
    readonly type = ManageUserActionTypes.DeleteUserFail;
    constructor(public payload: string) { }
}

export type ManageUserActions =  SetCurrentUser
  | ClearCurrentUser
  | InitializeCurrentUser
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | CreateUser
  | CreateUserSuccess
  | CreateUserFail
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFail;
