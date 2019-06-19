import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManageCategoryService } from '../service';
import {Router, ActivatedRoute} from '@angular/router';
import { Category, SubCategory } from '../model';
import { GlobalVariable } from 'src/app/global';
import { Store, select } from '@ngrx/store';
import * as State from '../state';
import { ManageProductState } from '../state/state.reducer';
import * as  SubCategoryAction from  '../state/actions/subCategory.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    templateUrl : './categoryThumbnail.component.html'
})
export class  CategoryThumbnailComponent implements OnInit, OnDestroy  {

    category: Category |null = null;
    private  Id = 'Id';
    language =  GlobalVariable.LanguageResourse;
    private _destroyed$ = new Subject();
    subCategoryList: SubCategory[] | null;
    subCategory: SubCategory;
    subCategorySearchString: string = '';

   constructor(private categoryService: ManageCategoryService,
               private activatedRoute: ActivatedRoute,
               private route: Router,
               private store:  Store<ManageProductState>
    ) {

   }

   ngOnDestroy() {
       this._destroyed$.next();
   }

   ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        const categoryId = params.get(this.Id);
        this.categoryService.getcategoryById(+categoryId).subscribe(
            category => {
                if  (category) {
                    this.category = category;
                    this._loadSubCategory();
            } else {
                this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
            }
            }
        );

      });

      this._listenSubCategoryList();
      this._listenSubCategory();
   }


   newSubCategoryEvent() {
       this.store.dispatch( new SubCategoryAction.InitalizeSubCategory());
   }

   addUpdateCategory(item: SubCategory){
        if(item.Id &&  item.Id !== 0){
            this.store.dispatch(new SubCategoryAction.UpdateSubCategory(item));
            this.cancelSubCategory();
        }else {
             item.CategoryId  = this.category.Id;
            this.store.dispatch(new SubCategoryAction.AddSubCategory(item));
            this.cancelSubCategory();
        }
   }

   deleteSubcategory(item: SubCategory) {
       this.store.dispatch( new SubCategoryAction.DeleteSubCategory(item));
   }

   editSubCategory(item: SubCategory) {
        this.store.dispatch( new SubCategoryAction.SetSubCurrentCategory(item));
   }

   cancelSubCategory() {
       this.store.dispatch( new  SubCategoryAction.ClearsubCurrentCategory());
   }



   private _loadSubCategory() {
        this.store.dispatch(new SubCategoryAction.LoadSubCategory(this.category.Id));
   }

   private _listenSubCategoryList() {
         this.store.pipe(select(State.getSubCategory))
            .pipe(takeUntil(this._destroyed$))
            .subscribe( (list) => {
                   this.subCategoryList =  list;
                   console.log(this.subCategoryList);
            });
   }

   private _listenSubCategory() {
         this.store.pipe(select(State.getCurrentSubCategory))
            .pipe(takeUntil(this._destroyed$))
            .subscribe( (subcategory) => {
                this.subCategory =  subcategory;
            })
   }

}
