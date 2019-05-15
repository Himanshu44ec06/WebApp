import { UserModel } from '../model/UserModel';
import { ManageUserActions, ManageUserActionTypes } from './state.actions';

// State for this feature (ManageUser)
export interface ManageUserState  {
    currentUserId: number | null;
    users: UserModel[];
    error: string;
}


const initialState: ManageUserState = {
    currentUserId : null,
    users: [],
    error: ''
};

export  function reducer(state = initialState, actions: ManageUserActions): ManageUserState {
    switch (actions.type) {
        case  ManageUserActionTypes.LoadSuccess :
            return  {
                ...state,
                users : actions.payload,
                error : ''
            };
        case  ManageUserActionTypes.LoadFail :
         return  {
             ...state,
             users : [],
             error : actions.payload
         };

        default:
          return state;
    }
}
