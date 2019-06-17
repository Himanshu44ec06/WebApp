import * as  SubCategoryAction from '../actions/subCategory.actions';
import { SubCategory } from '../../model';


export function CurrentSubCategoryReducer(state: SubCategory = null, actions :  SubCategoryAction.ManageSubcategoryAction){
    switch(actions.type) {
        case SubCategoryAction.ManageSubCategoryActionTypes.InitalizeSubCategory: 
            return  new SubCategory();

        case SubCategoryAction.ManageSubCategoryActionTypes.ClearCurrentSubCategory:
            return null;
        
        case SubCategoryAction.ManageSubCategoryActionTypes.SetCurrentSubCategory:
            return actions.payload;

        default:
            return state;
    }
}