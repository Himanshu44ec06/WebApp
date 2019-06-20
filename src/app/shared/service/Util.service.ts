import { Injectable } from '@angular/core';

@Injectable()
export  class Util {
    static searchWithinArray(array = [],propertyName = '',searchstring = '') {
        const _string  = searchstring.toLocaleLowerCase();
         return  array.filter(f =>  f[propertyName].toLowerCase().indexOf(_string));
    }
}