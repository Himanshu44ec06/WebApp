/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

import { GlobalVariable } from '../../global';


const getUserFeatureState = createFeatureSelector<UserState>(GlobalVariable.Store.UserModule);

export const getCurrentUser  = createSelector(
    getUserFeatureState,
    state => {
        return state.currentUser;
    }
);

export  const  getMaskUserName = createSelector(
    getUserFeatureState,
    state => {
      return  state.maskUserName;
    }
);


