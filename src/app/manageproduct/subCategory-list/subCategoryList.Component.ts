import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { SubCategory } from '../model';
import  { GlobalVariable }  from '../../global';

@Component({
     selector : 'subcategory-list',
     templateUrl : './subCategoryList.component.html'
})

export class SubCategoryListComponent implements  OnInit, OnChanges {


    FilterList: SubCategory[]  = [];

    language = GlobalVariable.LanguageResourse;


    @Input('search-string') searchString:  string = '';
    @Input('list') List: SubCategory[] = [];

    @Output('Edit') editEmitter =  new EventEmitter();
    @Output('Delete') deleteEmitter = new  EventEmitter();

    constructor() {

    }

    ngOnInit() {
        
    }

    ngOnChanges() {
         if(this.List) {
             this.filterListFunc();
         }
    }

    Edit(item: SubCategory) {
        this.editEmitter.emit(item);
    }

    Delete(item: SubCategory) {
        this.deleteEmitter.emit(item);
    }

    private filterListFunc() {

        if (this.searchString.length > 0) {
            const  searchStr  =  this.searchString.toLowerCase();
            this.FilterList =  this.List.filter( (f) => f.Name.toLowerCase().indexOf(searchStr) > -1 ); 
        } else {
            this.FilterList  = this.List.slice(0);
        }
    }
}