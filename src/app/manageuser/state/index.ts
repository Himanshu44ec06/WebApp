import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import * as fromRoot from '../../state/state';
import * as fromFeature from '../state/state.reducer';

import { GlobalVariable } from '../../global';
import { UserModel } from '../model/UserModel';

export interface State extends fromRoot.State {
    ManageUser: fromFeature.ManageUserState;
}

// Select Feature
const getFeatureState = createFeatureSelector<fromFeature.ManageUserState>(GlobalVariable.Store.ManagerUserModule);

export const getError =  createSelector(
    getFeatureState,
    state => state.error
);

export const  getUsers = createSelector(
    getFeatureState,
    state =>  state.users
);

export  const getCurrentUserId = createSelector(
    getFeatureState,
    state => state.currentUserId
);

export  const getCurrentUser = createSelector(
    getFeatureState,
    getCurrentUserId,
    (state, currentId ) => {
         if (currentId !== 0) {
             return  currentId ? state.users.find(p => p.Id === currentId) :  null;
         }
    }
);