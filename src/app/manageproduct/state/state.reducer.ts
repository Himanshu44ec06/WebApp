import { Category, SubCategory, Service } from '../model';
import { ManageProductActionTypes , ManageProductAction } from './state.actions';


export  interface  ManageProductState {
    Category: Category [];
    CurrentCategory: Category | null ;

    SubCategory: SubCategory [];
    CurrentSubCategory: SubCategory | null;

    Services: Service [];
    CurrentService: Service | null;

    error: string;

}

const  intialState: ManageProductState = {
    Category : [],
    CurrentCategory : null,
    SubCategory : [],
    CurrentSubCategory : null,
    Services : [],
    CurrentService : null,
    error : ''
};

export  function reducer(state = intialState, actions: ManageProductAction): ManageProductState {

    switch (actions.type) {

        case ManageProductActionTypes.LoadCategorySuccess :
           return  {
               ...state,
               error : '',
               Category: actions.payload
           };
        case ManageProductActionTypes.LoadCategoryFail :
            return  {
                ...state,
                error : actions.payload,
                Category : []
            };
        case ManageProductActionTypes.ClearCurrentCategory :
            return {
                ...state,
                CurrentCategory : null
            };
        case ManageProductActionTypes.InitalizeCategory :
            return {
                ...state,
                CurrentCategory : actions.payload
            };
        case ManageProductActionTypes.SetCurrentCategory :
            return  {
                ...state,
                CurrentCategory: actions.payload
            };
        case ManageProductActionTypes.AddCategorySuccess:
        return  {
             ...state,
             error : '',
             CurrentCategory :  null,
             Category : [...state.Category, actions.payload]
        };

        case ManageProductActionTypes.AddCategoryFail:
        return  {
             ...state,
             error: actions.payload
        };


        case ManageProductActionTypes.UpdateCategorySuccess:
             const updateCategory = state.Category.map(
                     item => actions.payload.Id === item.Id ? actions.payload : item);
             return  {
                ...state,
                error : '',
                CurrentCategory : null,
                Category : updateCategory
            };
        case ManageProductActionTypes.UpdateCategoryFailed :
            return  {
                    ...state,
                    error : actions.payload
            };

        case ManageProductActionTypes.DeleteCategorySuccess :
            return {
                ...state,
                Category : state.Category.filter( f => f.Id !== actions.payload.Id),
                error : ''
            };
        case ManageProductActionTypes.DeleteCategoryFailed :
            return  {
                ...state,
                error : actions.payload
            };

        default :
        return state;
    }
}

