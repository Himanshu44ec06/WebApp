import { Category, SubCategory, Service } from '../model';

import  { CategoryReducer, CurrentCategoryReducer, 
    CurrentSubCategoryReducer, SubCategoryReducer, 
    ServiceReducer, CurrentServiceReducer } from  './reducer';
import { ActionReducerMap } from '@ngrx/store';


export  interface  ManageProductState {
    Category: Category [];
    CurrentCategory: Category | null ;

    SubCategory: SubCategory [];
    CurrentSubCategory: SubCategory | null;

    Services: Service [];
    CurrentService: Service | null;

    error: string;

}

export const  intialState: ManageProductState = {
    Category : [],
    CurrentCategory : null,
    SubCategory : [],
    CurrentSubCategory : null,
    Services : [],
    CurrentService : null,
    error : ''
};

export  const reducer :  ActionReducerMap<ManageProductState>  = {
  Category :  CategoryReducer,
  CurrentCategory : CurrentCategoryReducer,
    SubCategory : SubCategoryReducer,
    CurrentSubCategory :  CurrentSubCategoryReducer,
    Services : ServiceReducer,
    CurrentService : CurrentServiceReducer,
    error : null
};
