import * as  SubCategoryAction from '../actions/subCategory.actions';
import { SubCategory } from '../../model';

export    function  SubCategoryReducer(state: SubCategory[] =[], actions: SubCategoryAction.ManageSubcategoryAction){

    switch (actions.type) {
       
        case  SubCategoryAction.ManageSubCategoryActionTypes.UpdateSubCategorySuccess:
            const updateCategory = state.map(
                item => actions.payload.Id === item.Id ? actions.payload : item);
            return [...updateCategory]
            
        case SubCategoryAction.ManageSubCategoryActionTypes.LoadSubCategorySuccess:
             return [...actions.payload]

        case SubCategoryAction.ManageSubCategoryActionTypes.AddSubCategorySuccess:
                return  [...state, actions.payload]

        case SubCategoryAction.ManageSubCategoryActionTypes.DeleteSubCategorySuccess :
                return  state.filter(f => f.Id !== actions.payload.Id);
                
        default:
            return  state;
    }
}
