import  { Injectable } from '@angular/core';
import { SubCategory } from '../model';
import { Observable, of } from 'rxjs';

@Injectable()
export  class ManageSubCategoryService {


    subCategory: SubCategory;
    list: SubCategory[];

    getSubcategoryBycategoryId(categoryId): Observable<SubCategory[]> {
             return  of(
                 this.list.filter( (f) => f.CategoryId == categoryId)
             );
    }

    update(subcategory: SubCategory) : Observable<SubCategory> {
           const  index  = this.list.findIndex( f =>  f.Id === subcategory.Id );
           this.list[index] = subcategory;
           return  of(subcategory);
    }

    addSubCategory(subCategory: SubCategory) : Observable<SubCategory> {
            this.list.push(subCategory);
            return  of(subCategory);
    }

    deleteSubCategory(subCategory: SubCategory) : Observable<SubCategory> {
        this.list  =  this.list.filter( f => f.Id !== subCategory.Id );
        return  of(subCategory);
    }



}