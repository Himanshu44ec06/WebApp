import { Category } from '../../model';
import * as CategoryAction from '../actions/category.actions';
import { stat } from 'fs';

export function  CurrentCategoryReducer(state: Category,  actions: CategoryAction.ManageProductAction): Category {


    switch(actions.type) {

        default : 
            return  state;
    }

}