import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageSubCategoryService, ManageCategoryService } from '../service';
import { SubCategory, Category, Service } from '../model';
import  { GlobalVariable } from  '../../global';
import { Store, select } from '@ngrx/store';
import { ManageProductState } from '../state/state.reducer';
import *  as ManageServiceAction  from '../state/actions/service.actions';
import { Subject } from 'rxjs';
import *  as state  from '../state';
import { takeUntil } from 'rxjs/operators';

@Component({
     templateUrl  : './subcategoryThumbnail.component.html'
}) 

export class  SubcategoryThumbnailComponent implements  OnInit, OnDestroy {

    private  _id = 'subcatId';
    private  _categoryId = 'Id';
    subCategory: SubCategory;
    category: Category;
    language = GlobalVariable.LanguageResourse;


    serviceList: Service[] = [];
    searchString  = '';
    currentService: Service;


    private _destroyed$ = new Subject();

    constructor( private activatedRoute: ActivatedRoute,
        private route: Router,
        private manageSubCategoryService: ManageSubCategoryService,
        private manageCategoryService: ManageCategoryService,
        private store: Store<ManageProductState>
        ){

        }

    ngOnDestroy() {
            this._destroyed$.next();
    }   

    ngOnInit(){
           this.activatedRoute.paramMap.subscribe( params => {
              
                const subcategoryId = params.get(this._id);
                const categoryId =  params.get(this._categoryId);
                this.manageCategoryService.getcategoryById(+categoryId).subscribe(item => {
                    if(item) {
                        this.category = item;

                    }else {
                        this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
                    }
                })

                this.manageSubCategoryService.getSubcategoryById(+subcategoryId).subscribe(item => {
                     if(item) {
                         this.subCategory = item;
                         this._dispatchLoadService(this.subCategory.Id);
                     }else {
                         this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
                     }
                },error=> {
                    this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
                });
           })

           this._loadService();
           this._loadCurrentService();
    }


    EditService(item: Service) {
        this.store.dispatch(new ManageServiceAction.SetCurrentService(item))
    }

    DeleteService(item: Service) {
        this.store.dispatch( new ManageServiceAction.DeleteService(item));
    }

    private _dispatchLoadService(id) {
        this.store.dispatch( new ManageServiceAction.LoadService(id) )
    }
    private  _loadService() {
          this.store.pipe( select(state.getService) )
          .pipe( takeUntil(this._destroyed$)).subscribe((list) =>  {
              this.serviceList =  list;
          })
    }

    private _loadCurrentService() {
         this.store.pipe( select(state.getCurrentService) ).pipe( takeUntil(this._destroyed$))
         .subscribe( (service) => {
              this.currentService =  service;
         });
    }

}