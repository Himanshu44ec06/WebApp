import { Action } from '@ngrx/store';
import { SubCategory } from  '../../model'


export enum  ManageSubCategoryActionTypes {
    LoadSubCategory = '[ManageSubCategory] LoadSubCategory',
    LoadSubCategoryFail = '[ManageSubCategory] LoadSubCategoryFailed',
    LoadSubCategorySuccess = '[ManageCategory] LoadSubCategorySuccess',

    AddSubCategory = '[ManageSubCategory] AddSubCategory',
    AddSubCategorySuccess = '[ManageSubCategory] AddSubCategorySuccess',
    AddSubCategoryFail = '[ManageSubCategory] AddSubCategoryFail',

    SetCurrentSubCategory = '[ManageSubCategory] SetCurrentSubCategory',
    ClearCurrentSubCategory = '[ManageSubCategory] ClearCurrentSubCategory',
    InitalizeSubCategory  =  '[ManageSubCategory] InitalizeSubCategory',

    DeleteSubCategory = '[ManageSubCategory] DeleteSubCategory',
    DeleteSubCategorySuccess = '[ManageSubCategory] DeleteSubCategorySuccess',
    DeleteSubCategoryFailed = '[ManageSubCategory] DeleteSubCategoryFailed',

    UpdateSubCategory = '[ManageSubCategory] UpdateSubCategory',
    UpdateSubCategorySuccess = '[ManageSubCategory] UpdateSubCategorySuccess',
    UpdateSubCategoryFailed = '[ManageSubCategory] UpdateSubCategoryFailed',

}


export class AddSubCategory  implements Action {
      readonly type  = ManageSubCategoryActionTypes.AddSubCategory
      constructor(public payload: SubCategory) {}
}

export class AddSubCategorySuccess  implements Action  {
    readonly  type  =  ManageSubCategoryActionTypes.AddSubCategorySuccess;
    constructor(public payload: SubCategory) {}
}

export  class  AddSubCategoryFail implements  Action  {
    readonly  type  = ManageSubCategoryActionTypes.AddSubCategoryFail;
    constructor(public payload: string) { }
}

export class UpdateSubCategory implements  Action {
    readonly  type  = ManageSubCategoryActionTypes.UpdateSubCategory;
    constructor(public payload: SubCategory) { }
}

export class UpdateSubCategorySuccess implements  Action {
    readonly  type  = ManageSubCategoryActionTypes.UpdateSubCategorySuccess;
    constructor(public payload: SubCategory) { }
}

export class UpdateSubCategoryFailed implements  Action {
    readonly  type  = ManageSubCategoryActionTypes.UpdateSubCategoryFailed;
    constructor(public payload: string) { }
}

export class DeleteSubCategory implements  Action {
    readonly  type  = ManageSubCategoryActionTypes.DeleteSubCategory;
    constructor(public payload: SubCategory) { }
}

export class DeleteSubCategorySuccess implements  Action {
    readonly  type  = ManageSubCategoryActionTypes.DeleteSubCategorySuccess;
    constructor(public payload: SubCategory) { }
}

export class DeleteSubCategoryFailed implements  Action {
    readonly  type  = ManageSubCategoryActionTypes.DeleteSubCategoryFailed;
    constructor(public payload: string) { }
}


export  class LoadSubCategory implements Action {
    readonly type =  ManageSubCategoryActionTypes.LoadSubCategory;
}

export  class LoadSubCategorySuccess {
    readonly type =  ManageSubCategoryActionTypes.LoadSubCategorySuccess;
    constructor(public payload: SubCategory[]) { }
}

export class LoadSubCategoryFail {
    readonly  type = ManageSubCategoryActionTypes.LoadSubCategoryFail;
    constructor(public payload: string) { }
}

export class  SetSubCurrentCategory  {
    readonly  type  = ManageSubCategoryActionTypes.SetCurrentSubCategory;
    constructor(public payload: SubCategory) { }
}
export class ClearsubCurrentCategory {
    readonly  type = ManageSubCategoryActionTypes.ClearCurrentSubCategory;
}

export  class  InitalizeSubCategory  {
    readonly  type = ManageSubCategoryActionTypes.InitalizeSubCategory;
    public payload =  new SubCategory();
}

export type ManageSubcategoryAction =  LoadSubCategory 
| LoadSubCategorySuccess
| LoadSubCategoryFail 
| UpdateSubCategory
| UpdateSubCategoryFailed
| UpdateSubCategorySuccess 
| DeleteSubCategory
| DeleteSubCategoryFailed
| DeleteSubCategorySuccess
| SetSubCurrentCategory
| ClearsubCurrentCategory
| InitalizeSubCategory
