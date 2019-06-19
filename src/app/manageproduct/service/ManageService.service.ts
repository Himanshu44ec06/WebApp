import  { Injectable } from '@angular/core';
import { Service } from '../model';
import { of } from 'rxjs';

@Injectable()
export  class ManageService {
    list: Service[];

    constructor() {}

    getServiceById(Id) {
         const index =  this.list.findIndex(f => f.Id === Id);
         if(index)
             return  of(this.list[index]);
         return  of(null);
    }

    getServicesBySubCatId(subCatId) {
         return of(this.list.filter(f => f.SubCategoryId === subCatId));
    }

    addService(service: Service) {
         service.Id = this.list.length + 1;
         this.list.push(service);
         return of(service);
    }

    updateService(service: Service) {
        const index =  this.list.findIndex(f => f.Id === service.Id);
        if(index) {
            this.list[index] = service;
        }
        return of(service);
    }

    deleteService(service:  Service) {
        this.list  = this.list.filter(f =>  f.Id !== service.Id);
        return  of(service);
    }

}