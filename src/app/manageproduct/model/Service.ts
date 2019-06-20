import { Base } from './Base';

export class Service extends Base {

    constructor(){
        super();
    }

    Id = 0;
    Name = '';
    Icon = '';
    Price = 0;
    Discount = 0;
    Description = '';
    SubCategoryId = 0;
    Status = 0;
    Note = '';
    Type: ServiceType
}

export enum  ServiceType {
    Unit
}
