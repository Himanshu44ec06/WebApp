import  { Injectable } from '@angular/core';
import { Service, ServiceType } from '../model';
import { of } from 'rxjs';

@Injectable()
export  class ManageService {
    list: Service[] = [];

    constructor() {
        let service = new Service();
        service.Name = "Upto 1 ton";
        service.Price = 1800;
        service.Discount = 0;
        service.Note = '';
        service.SubCategoryId = 1;
        service.Type = ServiceType.Unit;

        this.list.push(service);
    }

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