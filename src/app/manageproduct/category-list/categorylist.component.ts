import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Category } from '../model';


@Component({
// tslint:disable-next-line: component-selector
    selector : 'category-list',
    templateUrl : './categorylist.component.html'
})

export class  CategoryListComponent implements OnChanges {

    FilterList: Category[];

// tslint:disable-next-line: no-input-rename
    @Input('list') list: Category[];

// tslint:disable-next-line: no-input-rename
    @Input('search') searchString: string;

// tslint:disable-next-line: no-output-rename
    @Output('Edit-Category')  editCategory = new EventEmitter();

// tslint:disable-next-line: no-output-rename
    @Output('Delete-Category') deleteCategory = new EventEmitter();

    ngOnChanges() {
        if  (this.list) {
                this.filterList();
        }
    }

    Edit(category: Category) {
        this.editCategory.emit(category);
    }

    Delete(category: Category) {
        this.deleteCategory.emit(category);
    }

    private filterList() {
        const search = this.searchString.toLowerCase();
        if (search.length > 1) {
            this.FilterList = this.list.filter((f) => {
                return  f.Name.toLowerCase().indexOf(search) > -1;
            });
        } else {
             this.FilterList =  this.list.slice(0);
        }
    }
}
