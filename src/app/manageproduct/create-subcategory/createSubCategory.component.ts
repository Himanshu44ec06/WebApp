import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SubCategory } from '../model';
import { GlobalVariable } from  '../../global';

@Component({
    selector : 'create-subcategory',
    templateUrl :  './createSubcategory.component.html'
})

export class  CreateSubcategoryComponent implements  OnInit {

    language = GlobalVariable.LanguageResourse;
    
    @Input('current-subCategory') subCategory: SubCategory;
    
    @Output('cancel') cancelEmitter  = new EventEmitter();
    @Output('submitChild') submitEmitter = new EventEmitter();

    constructor() {
        this.language  = GlobalVariable.LanguageResourse;
    }

    ngOnInit(){

    }

    CancelSub() {
        debugger;
        this.cancelEmitter.emit();
    }

    Submit() {
        this.submitEmitter.emit(this.subCategory);
    }
    
}