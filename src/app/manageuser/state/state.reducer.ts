import { UserModel } from '../model/UserModel';
import { ManageUserActions } from './state.actions';

// State for this feature (Product)
export interface ManageUserState {
    currentUserId: number | null;
    users: UserModel[];
    error: string;
}


const initialState: ManageUserState = {
    currentUserId : null,
    users: [],
    error: ''
}


export  function reducer(state = initialState, actions: ManageUserActions): ManageUserState {
    switch (actions.type) {

        default:
          return state;
    }
}
