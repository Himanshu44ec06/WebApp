import { Category } from '../../model';
import * as CategoryAction from '../actions/category.actions';


export function  CurrentCategoryReducer(state: Category,  actions: CategoryAction.ManageProductAction): Category {


    switch(actions.type) {

        case CategoryAction.ManageProductActionTypes.ClearCurrentCategory: 
            return  null;
        
        case CategoryAction.ManageProductActionTypes.InitalizeCategory : 
           return  new Category();
        
        case CategoryAction.ManageProductActionTypes.SetCurrentCategory : 
           return  actions.payload;
           
        default : 
            return  state;
    }

}