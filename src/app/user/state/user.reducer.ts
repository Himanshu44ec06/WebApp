import { User } from '../model/user';
import { UserActions, UserActionTypes } from './user.action';


export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initialState: UserState = {
    maskUserName: true,
    currentUser: null
};

export function reducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {

        case UserActionTypes.MaskUserName :
          return  {
              ... state,
              maskUserName : action.payload
          };
        
        case UserActionTypes.LogOut : 
        return  {
            ...state,
            currentUser: null
        };
        default :
            return  state;
    }
}
