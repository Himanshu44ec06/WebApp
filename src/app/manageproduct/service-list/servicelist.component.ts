import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Service }  from '../model';
import { GlobalVariable } from 'src/app/global';



@Component({
    selector : 'service-list',
    templateUrl :  './servicelist.component.html'
})

export class ServiceListComponent implements OnInit, OnChanges  {
    
    language = GlobalVariable.LanguageResourse;

    FilterList: Service[] = [];

    @Input('serach-string') searchString = '';
    @Input('list') List: Service[] = [];

    @Output('edit-Emitter') editEmitter =  new EventEmitter();
    @Output('Delete') deleteEmitter = new  EventEmitter();
    
    constructor(){}

    ngOnInit(){}

    ngOnChanges() {
        if(this.List) {
            this.filterFunc();
        }
    }

    Edit(item: Service) {
        this.editEmitter.emit(item);
    }

    Delete(item: Service) {
        this.deleteEmitter.emit(item);
    }

    private filterFunc() {
        if (this.searchString.length > 0) {
            const  searchStr  =  this.searchString.toLowerCase();
            this.FilterList =  this.List.filter( (f) => f.Name.toLowerCase().indexOf(searchStr) > -1 ); 
        } else {
            this.FilterList  = this.List.slice(0);
        }
    }
}