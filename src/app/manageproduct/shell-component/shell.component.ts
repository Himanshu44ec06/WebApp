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

      constructor(private store: Store<fromStore.ManageProductState>) {

      }

      ngOnInit() {
                  this.store.pipe(select(state.getCurrentCategory))
                  .subscribe( category => this.CurrentCategory = category);
      }

      AddCategoryEvent() {
                  this.store.dispatch(new actions.InitalizeCategory());
      }

      CancelAddCategory() {
             this.store.dispatch(new actions.ClearCurrentCategory());
      }

      SubmitAddCategory($event) {
             console.log($event);
      }
}
