import { UserModel } from '../model/UserModel';
import { ManageUserActions, ManageUserActionTypes } from './state.actions';

// State for this feature (ManageUser)
export interface ManageUserState  {
    currentUserId: number | null;
    users: UserModel[];
    currentUser : UserModel  | null;
    error: string;
}


const initialState: ManageUserState = {
    currentUserId : null,
    currentUser :  null,
    users: [],
    error: ''
};

export  function reducer(state = initialState, actions: ManageUserActions): ManageUserState {
    switch (actions.type) {
        case ManageUserActionTypes.InitializeCurrentUser : 
            return {
                ...state,
                currentUser :  new UserModel()
            }
        case ManageUserActionTypes.SetCurrentUser :
            return  {
                ...state,
                currentUser :  actions.payload
            }

        case ManageUserActionTypes.SetCurrentUser:
                return  {
                    ...state,
                    currentUser : actions.payload,
                    error : ''
                };
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

        case ManageUserActionTypes.CreateUserSuccess: 
           return  {
               ...state,
               users : [...state.users, actions.payload],
               currentUser: null,
               error : ''
           };
        case ManageUserActionTypes.CreateUserFail :
        return  {
            ...state,
            error : actions.payload
        }

        case ManageUserActionTypes.DeleteUserSuccess:
        return  {
            ...state,
            users :  state.users.filter(user => user.Id !== actions.payload),
            error : ''
        };

        case ManageUserActionTypes.DeleteUserFail:
        return {
          ...state,
          error : actions.payload
        };
        default:
          return state;
    }
}
