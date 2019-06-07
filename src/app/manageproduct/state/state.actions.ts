import { Action } from '@ngrx/store';
import { Category } from '../model';


export enum  ManageProductActionTypes {
    LoadCategory = '[ManageCategory] LoadCategory',
    LoadCategoryFail = '[ManageCategory] LoadCategoryFailed',
    LoadCategorySuccess = '[ManageCategory] LoadCategorySuccess',

    AddCategory = '[ManageCategory] AddCategory',
    AddCategorySuccess = '[ManageCategory] AddCategorySuccess',
    AddCategoryFail = '[ManageCategory] AddCategoryFail',

    SetCurrentCategory = '[ManageCategory] SetCurrentCategory',
    ClearCurrentCategory = '[ManageCategory] ClearCurrentCategory',
    InitalizeCategory  =  '[ManageCategory] InitalizeCategory',

    DeleteCategory = '[ManageCategory] DeleteCategory',
    DeleteCategorySuccess = '[ManageCategory] DeleteCategorySuccess',
    DeleteCategoryFailed = '[ManageCategory] DeleteCategoryFailed',

    UpdateCategory = '[ManageCategory] UpdateCategory',
    UpdateCategorySuccess = '[ManageCategory] UpdateCategorySuccess',
    UpdateCategoryFailed = '[ManageCategory] UpdateCategoryFailed',

}


export class AddCategory  implements Action {
      readonly type  = ManageProductActionTypes.AddCategory;
      constructor(public payload: Category) {}
}

export class AddCategorySuccess  implements Action  {
    readonly  type  =  ManageProductActionTypes.AddCategorySuccess;
    constructor(public payload: Category) {}
}

export  class  AddCategoryFail implements  Action  {
    readonly  type  = ManageProductActionTypes.AddCategoryFail;
    constructor(public payload: string) { }
}

export class UpdateCategory implements  Action {
    readonly  type  = ManageProductActionTypes.UpdateCategory;
    constructor(public payload: Category) { }
}

export class UpdateCategorySuccess implements  Action {
    readonly  type  = ManageProductActionTypes.UpdateCategorySuccess;
    constructor(public payload: Category) { }
}

export class UpdateCategoryFailed implements  Action {
    readonly  type  = ManageProductActionTypes.UpdateCategoryFailed;
    constructor(public payload: string) { }
}

export class DeleteCategory implements  Action {
    readonly  type  = ManageProductActionTypes.DeleteCategory;
    constructor(public payload: Category) { }
}

export class DeleteCategorySuccess implements  Action {
    readonly  type  = ManageProductActionTypes.DeleteCategorySuccess;
    constructor(public payload: Category) { }
}

export class DeleteCategoryFailed implements  Action {
    readonly  type  = ManageProductActionTypes.DeleteCategoryFailed;
    constructor(public payload: string) { }
}


export  class LoadCategory implements Action {
    readonly type =  ManageProductActionTypes.LoadCategory;
}

export  class LoadCategorySuccess {
    readonly type =  ManageProductActionTypes.LoadCategorySuccess;
    constructor(public payload: Category[]) { }
}

export class LoadCategoryFail {
    readonly  type = ManageProductActionTypes.LoadCategoryFail;
    constructor(public payload: string) { }
}

export class  SetCurrentCategory  {
    readonly  type  = ManageProductActionTypes.SetCurrentCategory;
    constructor(public payload: Category) { }
}
export class ClearCurrentCategory {
    readonly  type = ManageProductActionTypes.ClearCurrentCategory;
}

export  class  InitalizeCategory  {
    readonly  type = ManageProductActionTypes.InitalizeCategory;
    public payload =  new Category();
}

export type ManageProductAction =  LoadCategory
| LoadCategorySuccess
| LoadCategoryFail
| SetCurrentCategory
| ClearCurrentCategory
| InitalizeCategory
| AddCategory
| AddCategorySuccess
| AddCategoryFail
| UpdateCategory
| UpdateCategorySuccess
| UpdateCategoryFailed
| DeleteCategory
| DeleteCategorySuccess
| DeleteCategoryFailed;
