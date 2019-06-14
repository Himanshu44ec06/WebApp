import { Category, SubCategory, Service } from '../model';

import  { CategoryReducer, SubCategoryReducer } from  './reducer';
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
  CurrentCategory : null,
    SubCategory : null,
    CurrentSubCategory : null,
    Services : null,
    CurrentService : null,
    error : null
}
