import { Component, OnInit } from '@angular/core';
import { ManageCategoryService } from '../service';
import {Router, ActivatedRoute} from '@angular/router';
import { Category } from '../model';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GlobalVariable } from 'src/app/global';


@Component({
    templateUrl : './categoryThumbnail.component.html'
})
export class  CategoryThumbnailComponent implements OnInit  {

    category: Category |null = null;
    Id = 'Id';
    language =  GlobalVariable.LanguageResourse;

   constructor(private categoryService: ManageCategoryService,
               private activatedRoute: ActivatedRoute,
               private route: Router
    ) {

   }

   ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        const categoryId = params.get(this.Id);
        this.categoryService.getcategoryById(+categoryId).subscribe(
            category => {
                if  (category) {
                    this.category = category;
            } else {
                this.route.navigateByUrl(GlobalVariable.Url.ManageProduct);
            }
            }
        );

      });
   }

}
