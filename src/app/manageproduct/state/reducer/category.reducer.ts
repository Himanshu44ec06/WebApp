import * as baseReducer from '../state.reducer';
import * as CategoryAction from '../actions/category.actions';

export  function reducer(state = baseReducer.intialState, actions: CategoryAction.ManageProductAction): 
baseReducer.ManageProductState {

    switch (actions.type) {

        case CategoryAction.ManageProductActionTypes.LoadCategorySuccess :
           return  {
               ...state,
               error : '',
               Category: actions.payload
           };
        case CategoryAction.ManageProductActionTypes.LoadCategoryFail :
        case CategoryAction.ManageProductActionTypes.DeleteCategoryFailed:
        case CategoryAction.ManageProductActionTypes.AddCategoryFail:
        case CategoryAction.ManageProductActionTypes.UpdateCategoryFailed:
            return  {
                ...state,
                error : actions.payload,
                Category : []
            };
        case CategoryAction.ManageProductActionTypes.ClearCurrentCategory :
            return {
                ...state,
                CurrentCategory : null
            };
        case CategoryAction.ManageProductActionTypes.InitalizeCategory :
            return {
                ...state,
                CurrentCategory : actions.payload
            };
        case CategoryAction.ManageProductActionTypes.SetCurrentCategory :
            return  {
                ...state,
                CurrentCategory: actions.payload
            };
        case CategoryAction.ManageProductActionTypes.AddCategorySuccess:
        return  {
             ...state,
             error : '',
             CurrentCategory :  null,
             Category : [...state.Category, actions.payload]
        };
        case CategoryAction.ManageProductActionTypes.UpdateCategorySuccess:
             const updateCategory = state.Category.map(
                     item => actions.payload.Id === item.Id ? actions.payload : item);
             return  {
                ...state,
                error : '',
                CurrentCategory : null,
                Category : updateCategory
            };
        case CategoryAction.ManageProductActionTypes.DeleteCategorySuccess :
            return {
                ...state,
                Category : state.Category.filter( f => f.Id !== actions.payload.Id),
                error : ''
            };

        default :
        return state;
    }
}

