import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export  class  LowerCaseUrlSerializer   {

    defaultUrlSerializer: DefaultUrlSerializer;
    constructor() {
         this.defaultUrlSerializer = new DefaultUrlSerializer();
    }
    parse(url: string): UrlTree {
        return this.defaultUrlSerializer.parse(url.toLowerCase());
    }

    serialize(tree: UrlTree): string {
        return  this.defaultUrlSerializer.serialize(tree);
    }
}
