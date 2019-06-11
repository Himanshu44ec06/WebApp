import * as baseReducer from '../state.reducer';
import * as  SubCategoryAction from '../actions/subCategory.actions';

export    function  SubCategoryReducer(state = baseReducer.intialState, actions: SubCategoryAction.ManageSubcategoryAction):
 baseReducer.ManageProductState {

    switch (actions.type) {
        case SubCategoryAction.ManageSubCategoryActionTypes.LoadSubCategoryFail:
        case SubCategoryAction.ManageSubCategoryActionTypes.AddSubCategoryFail:
        case SubCategoryAction.ManageSubCategoryActionTypes.UpdateSubCategoryFailed:
        case SubCategoryAction.ManageSubCategoryActionTypes.DeleteSubCategoryFailed:
               return {
                   ...state,
                   error : actions.payload,
                   SubCategory : []
                };
        case  SubCategoryAction.ManageSubCategoryActionTypes.UpdateSubCategorySuccess:
            const updateCategory = state.SubCategory.map(
                item => actions.payload.Id === item.Id ? actions.payload : item);
            return {
                ...state,
                error : '',
                SubCategory : updateCategory
            };
        case SubCategoryAction.ManageSubCategoryActionTypes.LoadSubCategorySuccess:
            return  {
             ...state ,
             error : '',
             SubCategory :  actions.payload
            };
        case SubCategoryAction.ManageSubCategoryActionTypes.AddSubCategorySuccess:
              return {
                  ...state,
                  error : '',
                  SubCategory : [ ...state.SubCategory, actions.payload]
              };
        case SubCategoryAction.ManageSubCategoryActionTypes.DeleteSubCategorySuccess :
             return {
                  ...state,
                  error : '',
                  SubCategory  :  state.SubCategory.filter( f => f.Id !== actions.payload.Id )
             };
        default:
            return  state;
    }
}
