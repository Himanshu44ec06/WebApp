import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Category } from '../model';
import { GlobalVariable } from '../../global';

@Component({
// tslint:disable-next-line: component-selector
     selector: 'create-category',
     templateUrl: './createCategory.component.html'
})

export class  CreateCategoryComponent  {

     language = GlobalVariable.LanguageResourse;
     inclusionText = '';
     exclusionText = '';

// tslint:disable-next-line: no-input-rename
     @Input('current-category') currentCategory: Category;

// tslint:disable-next-line: no-output-rename
     @Output('cancel') cancelEmitter = new EventEmitter();

// tslint:disable-next-line: no-output-rename
     @Output('submit') submitEmitter = new EventEmitter();


     Cancel() {
          this.cancelEmitter.next();
     }

     Submit() {
          this.submitEmitter.emit(this.currentCategory);
     }
}
