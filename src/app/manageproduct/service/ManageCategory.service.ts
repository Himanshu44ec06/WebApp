import { Injectable } from '@angular/core';
import { Category } from '../model';
import { Observable, of } from 'rxjs';

@Injectable()
export  class ManageCategoryService {

    category: Category;
    listOfCategory: Category[] = [];
    constructor() {
            this.category = new Category();
            this.category.Id = 1;
            this.category.Name = 'AC Services';
            this.category.Icon = 'https://d2vj71og9gdu4k.cloudfront.net/WEB/service/e2e_ac.svg';
            this.listOfCategory.push(this.category);
    }
    getcategoryById(id): Observable<Category> {
        const category = this.listOfCategory.filter( f => f.Id === id);
        if (category.length > 0) {
            return  of(category[0]);
        } else {
            return  of(null);
        }
    }

    getCategory(): Observable<Category[]> {
            return of(this.listOfCategory);
    }

    deleteCategory(category: Category): Observable<Category> {
          this.listOfCategory  = this.listOfCategory.filter( (f) => f.Id !== category.Id );
          return  of(category);
    }

    updateCategory(category: Category): Observable<Category> {
        const  index =  this.listOfCategory.findIndex( f =>  f.Id === category.Id);
        this.listOfCategory[index] = category;
        return  of(category);
    }

    addCatgory(category: Category): Observable<Category> {
             category.Id =  this.listOfCategory.length + 1;
             this.listOfCategory.push(category);
             return of(category);
    }




}
