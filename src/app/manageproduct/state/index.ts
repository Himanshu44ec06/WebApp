import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { GlobalVariable } from '../../global';


import * as  fromRoot from '../../state/state';
import * as  fromFeature from '../state/state.reducer';

export interface State extends fromRoot.State {
    ManageCategory: fromFeature.ManageProductState;
}

const  getFeatureState =  createFeatureSelector<fromFeature.ManageProductState>(GlobalVariable.Store.ManageCategory);

export  const getError = createSelector(
    getFeatureState,
    state =>  state.error
);

export  const getCategory = createSelector(
    getFeatureState,
    state => state.Category
);

export  const  getCurrentCategory = createSelector(
    getFeatureState,
    state => state.CurrentCategory
);

export  const getSubCategory = createSelector(
    getFeatureState,
    state => state.SubCategory 
)

export const getCurrentSubCategory = createSelector(
    getFeatureState,
    state =>  state.CurrentSubCategory
)

export  const getCurrentService  =  createSelector(
    getFeatureState,
    state =>  state.CurrentService
)

export  const  getService = createSelector(
    getFeatureState,
    state =>  state.Services
)

