import  { Injectable } from '@angular/core';
import { SubCategory } from '../model';
import { Observable, of } from 'rxjs';

@Injectable()
export  class ManageSubCategoryService {
    subCategory: SubCategory;
    list: SubCategory[] = [];

    constructor(){
        let subCat  = new SubCategory();
        subCat.CategoryId = 1;
        subCat.Name = "Furniture And Furnishings";
        subCat.Id = 1;
        subCat.Icon = "https://d2vj71og9gdu4k.cloudfront.net/WEB/service/e2e-fabric-sofa-shampooing.jpg";
        this.list.push(subCat);
    }

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