import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageSubCategoryService, ManageCategoryService } from '../service';
import { SubCategory, Category } from '../model';
import  { GlobalVariable } from  '../../global';

@Component({
     templateUrl  : './subcategoryThumbnail.component.html'
}) 

export class  SubcategoryThumbnailComponent implements  OnInit {

    private  _id = 'subcatId';
    private  _categoryId = 'Id';
    subCategory: SubCategory;
    category: Category;
    language = GlobalVariable.LanguageResourse;

    constructor( private activatedRoute: ActivatedRoute,
        private route: Router,
        private manageSubCategoryService: ManageSubCategoryService,
        private manageCategoryService: ManageCategoryService
        ){

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
                     }else {
                         this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
                     }
                },error=> {
                    this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
                });
           })
    }

}