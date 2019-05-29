import { Action } from '@ngrx/store';

export enum  ManageProductActionTypes {
    LoadProduct = '[ManageProduct] LoadProduct',
    LoadProductFail = '[ManageProduct] LoadProductFailed',
    LoadProductSuccess = '[ManageProduct] LaodProductSuccess'
}

export  class LoadProduct {
    private type =  ManageProductActionTypes.LoadProduct;
    constructor() {}
}

export type ManageProductAction =  ManageProductActionTypes.LoadProduct | 
ManageProductActionTypes.LoadProductFail | 
ManageProductActionTypes.LoadProductSuccess