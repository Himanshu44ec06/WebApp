import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { GlobalVariable } from '../../global';


import * as  fromRoot from '../../state/state';
import * as  fromFeature from '../state/state.reducer';
import { stat } from 'fs';

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

