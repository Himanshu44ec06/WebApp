import { Component, OnInit } from '@angular/core';
import { Category } from '../model';
import { GlobalVariable } from '../../global';


import * as fromStore from '../state/state.reducer';
import * as  actions from '../state/state.actions';
import * as  state from '../state';
import { Store, select } from '@ngrx/store';

@Component({
      templateUrl : './shell.component.html'
})

export class ShellComponent implements  OnInit {
      searchString = '';
      language = GlobalVariable.LanguageResourse;
      CurrentCategory: Category = null;
      CategoryList: Category[] = [];

      constructor(private store: Store<fromStore.ManageProductState>) {
      }

      ngOnInit() {

            this.store.dispatch(new actions.LoadCategory());

            this.store.pipe(select(state.getCurrentCategory))
                  .subscribe( category => this.CurrentCategory = category);

            this.store.pipe( select(state.getCategory))
                  .subscribe(Categories => this.CategoryList =  Categories);
      }

      AddCategoryEvent() {
            this.store.dispatch(new actions.InitalizeCategory());
      }

      CancelAddCategory() {
             this.store.dispatch(new actions.ClearCurrentCategory());
      }

      EditCategory($event) {
            this.store.dispatch( new actions.SetCurrentCategory($event));
      }

      DeleteCategory($event) {

      }

      SubmitAddCategory(category: Category) {
            if (category.Id === 0) {
                  this.store.dispatch(new actions.AddCategory(category));
            } else {
                  this.store.dispatch(new actions.UpdateCategory(category));
            }
      }
}
