/* NgRx */
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MaskUserName = '[User] Mask User Name',
  LogOut = '[User] Logout User'
}

export class MaskUserName implements Action {
  readonly type = UserActionTypes.MaskUserName;

  constructor(public payload: boolean) { }
}

export class LogOutUser  implements Action  {
     readonly type = UserActionTypes.LogOut;
};

export type UserActions = MaskUserName |  LogOutUser;
