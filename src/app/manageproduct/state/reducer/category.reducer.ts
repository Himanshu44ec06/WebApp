import * as CategoryAction from '../actions/category.actions';
import { Category } from '../../model';


export  function CategoryReducer(state :Category[] = [], actions: CategoryAction.ManageProductAction): Category[] {

    switch (actions.type) {

        case CategoryAction.ManageProductActionTypes.LoadCategorySuccess :
           return [...actions.payload]
        
        case CategoryAction.ManageProductActionTypes.AddCategorySuccess:
            return  [...state, actions.payload]
        
        case CategoryAction.ManageProductActionTypes.UpdateCategorySuccess:
            const updateCategory = state.map(
                     item => actions.payload.Id === item.Id ? actions.payload : item);
            return [... updateCategory];
            
        case CategoryAction.ManageProductActionTypes.DeleteCategorySuccess :
            return  state.filter(f => f.Id !== actions.payload.Id);

        default :
            return state;
    }
}

